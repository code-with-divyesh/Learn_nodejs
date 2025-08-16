const express = require("express");
const app = express();
const userModel = require("./userModel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  const userCreated = await userModel.create({
    name: "jaymin",
    username: "jaymin_09",
    email: "jaymin@gmail.com",
  });

  res.send(userCreated);
});
app.get("/read", async (req, res) => {
  // const readUsers = await userModel.find();
  // res.send(readUsers);

  const readUsers = await userModel.findOne({ username: "jaymin_09" });
  res.send(readUsers);
});
app.get("/update", async (req, res) => {
  const updateUser = await userModel.findOneAndUpdate(
    { username: "jaymin_09" },
    { username: "jaimin_09" },
    { new: true }
  );
  res.send(updateUser);
});
app.get("/delete", async (req, res) => {
  const userDeleted = await userModel.deleteOne({ username: "jaimin_09" });
  res.send(userDeleted);
});

// app.get("/create", async (req, res) => {
//   const userCreated = await userModel.create({
//     name: "Divyesh",
//     username: "divyesh_07",
//     email: "divyesh@gmail.com",
//   });
//   res.send(userCreated);
// });

// app.get("/update", async (req, res) => {
//   const userUpdated = await userModel.findOneAndUpdate(
//     { username: "drashti_07" },
//     { username: "divyesh_07" },
//     { new: true }
//   );
//   res.send(userUpdated);
// });

// app.get("/read", async (req, res) => {
//   // read all users and return data in array
//   // const readUsers = await userModel.find();
//   // res.send(readUsers);
//   // read specific users and return data in obj
//   // const readuser = await userModel.findOne({ username: "divyesh_07" });
//   // res.send(readuser);
// });

// app.get("/delete", async (req, res) => {
//   const userDeleted = await userModel.deleteOne({ username: "divyesh_07" });
//   res.send(userDeleted);
// });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
