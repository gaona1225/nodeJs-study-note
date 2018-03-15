const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

const callbackA = () => {
    console.log("A");
    myEmitter.removeListener("event", callbackB);
};

const callbackB = () => {
    console.log("B");
};

myEmitter.on("event", callbackA);
myEmitter.on("event", callbackB);

myEmitter.emit("event");

myEmitter.emit("event");