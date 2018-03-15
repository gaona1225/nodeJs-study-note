const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");
const cent = Buffer.from([0xc2, 0xA2]);
console.log(decoder.write(cent)); // output ¢

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro)); // output €

decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC]))); // output €