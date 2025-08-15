const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  });
});
app.get("/files/:filename", (req, res) => {
  const filePath = path.join(__dirname, "files", req.params.filename);

  fs.readFile(filePath, "utf-8", function (err, filedata) {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(404).send("File not found");
    }

    res.render("show", {
      filename: req.params.filename,
      filedata: filedata,
    });
  });
});
app.get("/edit/:filename", (req, res) => {
  const filePath = path.join(__dirname, "files", req.params.filename);
  res.render("edit", {
    filename: req.params.filename,
  });
});
app.post("/edit", (req, res) => {
  console.log(req.body);
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.New}`,
    function (err) {
      res.redirect("/");
    }
  );
});
app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    function (err) {
      res.redirect("/");
    }
  );
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
