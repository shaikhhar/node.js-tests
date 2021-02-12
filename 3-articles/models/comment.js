const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  body: { type: String, required: true },
  article: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
  commentator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
