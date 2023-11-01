const express = require("express");
const connectDB = require("./bd/database.config");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.json());
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const bootstrap = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

bootstrap();
