const util = require("util");
/*async function fn() {
    return await Promise.resolve("hello world");
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});*/

// const debuglog = util.debuglog("foo");
// debuglog("hello from foo [%d]", 123);

console.log(util.format("%s:%s", "foo", "bar", "baz"));
console.log(util.format(1,2,3));
console.log(util.format("%% %s"));