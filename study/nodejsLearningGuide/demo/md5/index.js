var crypto = require("crypto");
var md5 = crypto.createHash("md5");
var result = md5.update("a").digest("hex");
console.log(result); // output 0cc175b9c0f1b6a831c399e269772661