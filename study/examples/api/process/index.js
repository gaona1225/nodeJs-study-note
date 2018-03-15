const fs = require("fs");

process.on("exit", (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.on("uncaughtException", (err) => {
    fs.writeSync(1, `Caught exception:${err}\n`);
});

setTimeout(() => {
    console.log("This will still run.");
}, 500);

nonexistentFunc();
console.log("This will not run.");


process.argv.forEarch((val, index) => {
    console.log(`${index}:${val}`);
});