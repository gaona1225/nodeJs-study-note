const repl = require("repl");

function welcome (name) {
    console.log(`你好${name}!`);
}

welcome("Node.js 用户");

const msg = "message";
repl.start("> ").context.m = msg;
