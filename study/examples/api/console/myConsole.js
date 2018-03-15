/*
在浏览器中，用非真的断言调用 console.assert() 会导致 message 被打印到控制台但不会中断后续代码的执行。 而在 Node.js 中，非真的断言会导致抛出 AssertionError。
console.assert(true, "does nothing");

console.assert(false, "Whoops %s", "didn\'t work");*/

// 可以通过扩展 Node.js 的 console 并重写 console.assert() 方法来实现与浏览器中类似的功能。
// 可以用来直接替换内置的 console：

"use strict"
const myConsole = Object.create(console, {
    assert: {
        value: function assert (assertion, message, ...args) {
            try {
                console.assert(assertion, message, ...args);
            } catch (err) {
                console.error(err.stack);
            }
        },
        configurable: true,
        enumerable: true,
        writable: true
    }
});

module.exports = myConsole;