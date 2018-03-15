const stream = require("stream");
const fs = require("fs");
const file = fs.createReadStream("example.txt");

file.on("readable", () => {
    console.log("readable:", file.read());
});
file.on("end", () => {
    console.log("end");
});