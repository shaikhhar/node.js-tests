const express = require("express");
const app = express();
const validateInput = require("./input-validation");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Test Ok");
});

app.post("/user", validateInput, (req, res) => {
  res.send({
    msg: `valid name: ${req.body.name} & email: ${req.body.email}. Ok!`,
  });
});

app.listen(PORT, () => {
  console.log("app running on port ", PORT);
});
