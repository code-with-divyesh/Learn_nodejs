const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/auth_associationapp");

const userSchemaa = mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  posts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchemaa);
