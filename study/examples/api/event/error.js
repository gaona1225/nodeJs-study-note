const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

/*process.on("uncaughtException", (err) => {
    console.log("有错误");
});

myEmitter.emit("error", new Error("whoops!"));*/

myEmitter.on("error", (err) => {
    console.log("有错误");
});
myEmitter.emit("error", new Error("whoops!"))