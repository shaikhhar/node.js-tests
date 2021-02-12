const express = require("express");
const app = express();
const square = require("./middleware");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send({
    example: "http://localhost:3000/5",
  });
});

app.get("/:number", square, (req, res) => {
  res.send({
    result: `${req.params.number} squared = ${req.square}`,
  });
});

app.listen(PORT, () => {
  console.log("app running on http://localhost:", PORT);
});
