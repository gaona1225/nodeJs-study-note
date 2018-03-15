const util = require("util");
const vm = require("vm");
const script = new vm.Script("globalVar = 'set'");
const sandboxes = [{}, {}, {}];
sandboxes.forEach((sandbox) => {
    script.runInNewContext(sandbox);
});
console.log(util.inspect(sandboxes));
/**
    output 
[ { globalVar: 'set' },
  { globalVar: 'set' },
  { globalVar: 'set' } ]
*/