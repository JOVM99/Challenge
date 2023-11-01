const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.json());
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
