try {
    const m = 1;
    const n = m + z;
} catch (err) {
    console.log(err);
}

const fs = require("fs");
fs.readFile("一个不存在的文件", (err, data)=>{
    if (err) {
        console.error("读取文件出错", err);
        return ;
    }
});

const EventEmitter = require("events");
const ee = new EventEmitter();

setImmediate(() => {
    ee.emit("error", new Error("这会崩溃"));
});

function nodeStyleCallback(err, data){
    if (err) {
        console.error("There was an error", err);
        return ;
    }
    console.log(data);
};

fs.readFile("/some/file/that/does-not-exist", nodeStyleCallback);
fs.readFile("/some/file/that/does-exist", nodeStyleCallback);