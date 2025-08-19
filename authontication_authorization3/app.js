const cookieParser = require("cookie-parser");
const express = require("express");
const userModel = require("./model/user");
const postModel = require("./model/posts");
const app = express();
app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  const userCreated = await userModel.create({
    username: "Divyesh",
    email: "divu@gmail.com",
    age: 25,
  });
  res.send(userCreated);
});
app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postData: "hello saree yane",
    user: "68a450b0ca0d82a67f5a6bd6",
  });
  let user = await userModel.findOne({ _id: "68a450b0ca0d82a67f5a6bd6" });
  user.posts.push(post._id);
  await user.save();
  res.send({ user, post });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
