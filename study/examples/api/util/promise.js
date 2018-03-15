const util = require("util");
const fs = require("fs");
const stat = util.promisify(fs.stat);
stat(".").then((stats) => {

}).catch((errpr) => {
    
});