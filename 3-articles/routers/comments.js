const express = require("express");
const router = express.Router();
const Article = require("../models/article");
const User = require("../models/user");
const Comment = require("../models/comment");

router.post("/comment/:articleId/:userId", async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId);
    const newComment = await new Comment({
      ...req.body,
      commentator: req.params.userId,
      article: req.params.articleId,
    }).save();
    article.comments.push(newComment._id);
    await article.save();
    res.send(newComment);
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
