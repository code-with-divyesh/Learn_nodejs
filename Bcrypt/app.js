const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("polololo", salt, function (err, hash) {
      console.log(hash);
    });
  });
  res.send("done");
});
app.get("/check", (req, res) => {
  const userPassword = "polololo"; // user ne abhi login form me enter kiya
  const storedHash =
    "$2b$10$hj6ap7iRiSaOw.OroEYZrOHeYtzBdjypZUqjvNIuDJmXHTqdbQo4G";

  bcrypt.compare(userPassword, storedHash, function (err, result) {
    if (result) {
      res.send("Password match ✅");
    } else {
      res.send("Password galat ❌");
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
