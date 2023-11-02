const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./bd/database.config");
const Todo = require("./bd/schema");
const app = express();
const path = require("path");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("src/public"));

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    return res.status(500).send(err);
  }
});

app.post("/api/todos", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const todo = await newTodo.save();
    res.json(todo)
  } catch (error) {
    return res.status(500).send(error);
  }
});

const bootstrap = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

bootstrap();
