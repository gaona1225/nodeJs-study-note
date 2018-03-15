const crypto = require("crypto");
const sign = crypto.createSign("RSA-SHA256");

sign.write("some data to sign");
sign.end();

const priveateKey = getPrivateKeySomehow();
console.log(sign.sign(priveateKey, "hex"));