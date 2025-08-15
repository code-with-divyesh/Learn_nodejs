const fs = require("fs");

//writefile
// fs.writeFile("xyz.txt", "hello node js once again", function (arr) {
//   if (arr) {
//     console.log(arr);
//   } else console.log("done");
// });

// append file
// fs.appendFile("xyz.txt", "welcome in node js once again", function (err) {
//   if (err) {
//     console.log(err);
//   } else console.log(" append sucessfully");
// });

// rename file

// fs.rename("xyz.txt", "abc.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else console.log(" rename sucessfully");
// });

// if file doesn't exist it gives a error

// fs.rename("xyz.txt", "abc.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else console.log(" rename sucessfully");
// });

// copyfile

// fs.copyFile("abc.txt", "xyz.txt", function (error) {
//   if (error) {
//     console.log(error);
//   } else console.log(" copied sucessfully");
// });

// unlink

// fs.unlink("abc.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else console.log(" delete sucessfully");
// });

// read file

// fs.readFile("xyz.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   else console.log(data);
// });

// readSync file:it is sync so it doesn't required callback

// try {
//   const data = fs.readFileSync("xyz.txt", "utf-8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

//sync write file

// fs.writeFileSync("xyz.txt", "hey");
