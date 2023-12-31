//Get the tasks
const getTasks = async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = "";
  data.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `
        <input
            class="form-check-input mx-2"
            type="checkbox"
            ${todo.completed ? "checked" : ""} onchange="updateTask('${
      todo._id
    }')"
          />
          <label class="form-check-label" for="flexCheckChecked">
          ${todo.task}
          </label>
      `;
    list.appendChild(listItem);
  });
};

//Add a task
const addTask = async () => {
  const newTask = document.getElementById("task").value;
  if (newTask.trim() !== "") {
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: newTask, completed: false }),
    });
    await res.json();
    document.getElementById("task").value = "";
    getTasks();
  }
};

//Update whether the task is completed or not
const updateTask = async (id) => {
  const res = await fetch(`/api/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: event.target.checked }),
  });
  await res.json();
  getTasks();
};

//Delete completed tasks
const deleteCompleted = async () => {
  const res = await fetch(`/api/todos`, {
    method: "DELETE",
  });
  await res.json();
  getTasks();
};

//Delete all tasks
const deleteAll = async () => {
  const res = await fetch(`/api/todos/all`, {
    method: "DELETE",
  });
  await res.json();
  getTasks();
};
getTasks();
