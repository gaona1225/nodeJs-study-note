console.log("a 开始");
exports.done = false;

const b = require("./b.js");
console.log("在a中，b.done = %j", b.done);

exports.done = true;
console.log("a 结束");