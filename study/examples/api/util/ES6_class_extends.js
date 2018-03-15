const util = require("util");
const EventEmitter = require("events");

class MyStream extends EventEmitter {
    write(data) {
        this.emit("data", data);
    }
}

const stream = new MyStream();

stream.on("data", (data) => {
    console.log(`接收的数据:"${data}"`); // output 接收的数据:使用ES6
});
stream.write("使用ES6");