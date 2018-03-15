const fs = require("fs");
const {Console} = require("console");

const output = fs.createWriteStream("stdout.log");
const errorOutput = fs.createWriteStream("stderr.log");

const logger = new Console(output, errorOutput);

const count = 5;
logger.log("count:%d", count);

console.time("100-elements");

for(let i=0; i<100; i++) {
}

console.timeEnd("100-elements");

console.info("aa");