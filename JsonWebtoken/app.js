const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey";

app.get("/login", (req, res) => {
  const username = "divyesh";
  const password = "12345";

  // Normally tu DB me password check karega bcrypt se
  if (username === "divyesh" && password === "12345") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token }); // client ko token bhej diya
  } else {
    res.status(401).send("Invalid credentials ❌");
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer token"

  if (!token) return res.status(401).send("Token required ❌");

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send("Invalid token ❌");
    req.user = user;
    next();
  });
}
app.get("/profile", authenticateToken, (req, res) => {
  res.send(`Welcome ${req.user.username} ✅`);
});

fetch("http://localhost:3001/profile", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRpdnllc2giLCJpYXQiOjE3NTU0MjgxMjYsImV4cCI6MTc1NTQzMTcyNn0.ivaMmpuHVu-O4Lnsj2J0eZ5yEmYnGAAaysoePQn26Q4",
  },
})
  .then((res) => res.text())
  .then((data) => console.log(data));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
