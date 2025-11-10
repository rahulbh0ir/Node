const fs = require("fs");

console.log("Before");

fs.readFile("file.txt", "utf8", (err, data) => {
  if(err) throw err;
  console.log("File Content : ", data);
})

console.log("After")