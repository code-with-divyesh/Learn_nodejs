const express = require("express");
const app = express();

// //cookie:- client side
// const cookieParser = require("cookie-parser");

// //middleware for cookie
// app.use(cookieParser());

// //set cookie
// app.get("/", (req, res) => {
//   res.cookie("name", "Divyesh");
//   res.send("done");
// });

// //by deafult cookie is already set for all routes
// app.get("/profile", (req, res) => {
//   console.log(req.cookies.name);
//   res.send("done");
// });

// //clear cookies
// app.get("/clear-cookie", (req, res) => {
//   res.clearCookie("name");
//   res.send("Cookie delete ho gayi ❌");
// });

//session:-server-side

//User login karta hai → server ek session create karta hai → ek unique session ID browser me store hoti hai (usually cookie ke through).

// Har request me browser ye session ID bhejta hai → server check karta hai ki user kaun hai → user ka data wapas milta hai.

const session = require("express-session");

//middlware for session
app.use(
  session({
    secret: "secret-key", // encryption ke liye
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // 1 minute
  })
);

//set session

app.get("/login", (req, res) => {
  req.session.username = "Divyesh";
  res.send("Session set ho gaya ✅");
});

//read session
app.get("/profile", (req, res) => {
  res.send(`Hello ${req.session.username}`);
  console.log(req.session.username);
});

//delete session
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logout ho gaya, session delete ho gaya ❌");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
