const tty = require("tty");

process.stdout.on("resize", () => {
    console.log("屏幕大小已改变!");
    console.log(`${process.stdout.columns}x${process.stdout.rows}`);
});