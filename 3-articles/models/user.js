const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("User", userSchema);
