const express = require("express");
const app = express();

// what is middleware

// Middleware ek function hota hai jo request (req) aur response (res) ke beech me kaam karta hai.
// Ye request ko process karta hai, modify karta hai, aur decide karta hai ki aage request ko bhejna hai ya nahi

// Middleware ka kaam

// Request/Response ko modify karna

// Authentication/Authorization check karna

// Logging

// Data validate karna

// Error handle karna

// Types of Middleware

// Application-level middleware – Direct app.use() ya app.get() me use hota hai.

// Router-level middleware – express.Router() ke saath use hota hai.

// Built-in middleware – Jaise express.json(), express.static()

// Error-handling middleware – 4 parameters leta hai: (err, req, res, next)
// example of middleware

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(logger);
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
