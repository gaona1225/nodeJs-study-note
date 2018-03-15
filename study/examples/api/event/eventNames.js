const EventEmitter = require("events");

const myEE = new EventEmitter();
myEE.on("foo", () => {});
myEE.on("bar", () => {});

const sym = Symbol("symbol");
myEE.on(sym, () => {});

console.log(myEE.eventNames());

const http = require("http");
const util = require("util");
const server = http.createServer();
server.on("connection", (stream) => {
    console.log("someone connected!");
});

console.log(util.inspect(server.listeners("connection")));