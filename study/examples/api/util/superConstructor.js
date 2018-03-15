const util = require("util");
const EventEmitter = require("events");

function MyStream() {
    EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function (data) {
    this.emit("data", data);
}

const stream = new MyStream();
console.log(stream instanceof EventEmitter); // output true
console.log(MyStream.super_ === EventEmitter); // output true

stream.on("data", (data) => {
    console.log(`接收的数据:"${data}"`); // output 接收的数据运作良好!
});
stream.write("运作良好!");