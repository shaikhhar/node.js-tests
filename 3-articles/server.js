const express = require("express");
require("./db-connection/mongoose");
const cors = require("cors");

const userRouter = require("./routers/users");
const articleRouter = require("./routers/articles");
const commentRouter = require("./routers/comments");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(articleRouter);
app.use(commentRouter);

app.get("/", (req, res) => {
  res.send({
    msg: "Endpoints Info",
  });
});

app.listen(PORT, (req, res) => {
  console.log("server running on http://localhost:", PORT);
});
