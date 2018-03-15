const util = require("util");
const setImmediatePromise = util.promisify(setImmediate);

setImmediatePromise(40, "foobar").then((value) => {

});