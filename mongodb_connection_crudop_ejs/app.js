const express = require("express");
const app = express();
const userModel = require("./model/userModel");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/read", async (req, res) => {
  let allUsers = await userModel.find();
  res.render("read", { users: allUsers });
});
app.post("/create", async (req, res) => {
  console.log(req.body);
  let { name, email, imageurl } = req.body;
  let userCreated = await userModel.create({
    name,
    email,
    imageurl,
  });
  res.redirect("/read");
});
app.get("/delete/:id", async (req, res) => {
  let usersDeleted = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});
app.get("/edit/:id", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.id });
  res.render("edit", { User: user });
});
app.post("/update/:id", async (req, res) => {
  let { name, email, imageurl } = req.body;
  let userUpdated = await userModel.findOneAndUpdate(
    { _id: req.params.id },
    { name, email, imageurl },
    { new: true }
  );
  res.redirect("/read");
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
