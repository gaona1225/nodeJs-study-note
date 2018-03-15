const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

let m = 0;

/*myEmitter.on("event", (a, b) => { // 输出两次
    console.log(++m);
    setImmediate((a, b) => {
        console.log("这个是异步发生的");
    });
});
myEmitter.emit("event", "a", "b");
myEmitter.emit("event", "a", "b");*/

myEmitter.once("event", (a, b) => { // once输出一次
    console.log(++m);
    setImmediate((a, b) => {
        console.log("这个是异步发生的");
    });
});
myEmitter.emit("event", "a", "b");
myEmitter.emit("event", "a", "b");