const mongoose = require("mongoose");

const connectionURL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/blogs";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
