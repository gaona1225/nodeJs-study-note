const util = require("util");
const setImmediatePromise = util.promisify(setImmediate);

setImmediatePromise("foobar").then((value) => {

});
async function timerExample(){
    console.log("Before I/O callbacks");
    await setImmediatePromise();
    console.log("After I/O callbacks");
};
timerExample();