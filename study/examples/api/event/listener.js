const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.once("newListener", (event, listener) => {
    if (event === "event") {
        myEmitter.on("event", () => {
            console.log("B");
        });
    }
});

myEmitter.on("event", () => {
    console.log("A");
});
myEmitter.emit("event");

console.log(EventEmitter.listenerCount(myEmitter, "event"));