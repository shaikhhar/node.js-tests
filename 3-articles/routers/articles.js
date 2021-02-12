const express = require("express");
const router = express.Router();
const Article = require("../models/article");
const User = require("../models/user");

router.post("/article/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.send({ error: "User not found" });
    }
    const newArticle = await new Article({
      ...req.body,
      author: userId,
    }).save();
    res.send({ msg: "Article posted", article: newArticle });
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/articles", async (req, res) => {
  const articles = await Article.find({});
  res.send(articles);
});

// a) Write a query to find the total number of comments for the article.
router.get("/article-count/:articleId", async (req, res) => {
  const article = await Article.findById(req.params.articleId);
  res.send({ articleCount: article.comments.length });
});

// b) Write a query to fetch article detail and its comment including commentator details.
router.get("/article-detail/:articleId", async (req, res) => {
  const article = await Article.findById(req.params.articleId).populate({
    path: "comments",
    select: "body",
    model: "Comment",
    populate: {
      path: "commentator",
      select: "name email",
      model: "User",
    },
  });
  res.send(article);
});

// c) Write a query to fetch articles having one or more than one comments.
router.get("/article-one-or-more-comments", async (req, res) => {
  const articles = await Article.find({ $where: "this.comments.length > 0" });
  res.send(articles);
});

// d) Write a query to fetch an array of article Id, that are written by an author.

router.get("/article-ids/:userId", async (req, res) => {
  const articles = await Article.find({ author: req.params.userId });
  const articlesIds = articles.map((article) => article._id);
  res.send(articlesIds);
});

module.exports = router;
