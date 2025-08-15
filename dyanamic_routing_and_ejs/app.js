const express = require("express");
const path = require("path");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:username", (req, res) => {
  const userData = {
    name: req.params.username,
    age: 21,
    hobbies: ["coding", "music", "traveling"],
  };
  res.render("profile", { user: userData });
});
app.get("/profile", (req, res) => {
  const username = req.query.username; // ?username=Divyesh
  if (!username) {
    return res.send("Please provide a username");
  }
  res.redirect(`/profile/${username}`);
});

// Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
