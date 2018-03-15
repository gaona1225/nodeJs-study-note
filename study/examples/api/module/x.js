const EventEmitter = require("events");

module.exports = new EventEmitter();

setTimeout( () => {
    module.exports.emit("ready");
}, 1000);

/*setTimeout( () => {
    module.exports = {a: "hello"};
}, 0);*/