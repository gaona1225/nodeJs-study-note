const util = require("util");
const vm = require("vm");

const sandbox = {globalVar: 1};
vm.createContext(sandbox);
for (let i=0; i<10; ++i) {
    vm.runInContext("globalVar *= 2;", sandbox);
}
console.log(util.inspect(sandbox)); // output { globalVar: 1024 }