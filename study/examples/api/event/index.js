const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

/*myEmitter.on("event", () => {
    console.log("触发了一个事件!");
});
myEmitter.emit("event");*/

/*
a b MyEmitter {
  domain: null,
  _events: { event: [Function] },
  _eventsCount: 1,
  _maxListeners: undefined }
*/

/*myEmitter.on("event", function (a, b) {
    
    console.log(a, b, this); // a b {}
});
myEmitter.emit("event", "a", "b");*/

myEmitter.on("event", (a, b) => { // 使用 ES6 的箭头函数作为监听器。但是这样 this 关键词就不再指向 EventEmitter 实例
    console.log(a, b, this);
});
myEmitter.emit("event", "a", "b");