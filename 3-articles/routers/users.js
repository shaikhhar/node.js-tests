const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/add-user", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(409).send({ error: "User already exists" });
  }
  try {
    const newUser = await new User(req.body).save();
    res.send({ msg: "New user Added", user: newUser });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
