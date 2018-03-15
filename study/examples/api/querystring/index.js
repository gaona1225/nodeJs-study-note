const punycode = require("punycode");
console.log(punycode.decode("maana-pta")); // output mañana
console.log(punycode.decode("--dqo34k")); // output ☃-⌘


console.log(punycode.encode("mañana")); // output maana-pta
console.log(punycode.encode("☃-⌘")); // output --dqo34k

console.log(punycode.toASCII("mañana.com")); // output xn--maana-pta.com
console.log(punycode.toASCII("☃-⌘.com")); // output xn----dqo34k.com
console.log(punycode.toASCII("example.com")); // output example.com

console.log(punycode.toUnicode("xn--maana-pta.com")); // output mañana.com
console.log(punycode.toUnicode("xn----dqo34k.com")); // output ☃-⌘.com
console.log(punycode.toUnicode("example.com")); // output example.com

console.log(punycode.ucs2.decode("abc")); // output [ 97, 98, 99 ]
console.log(punycode.ucs2.decode("\uD834\uDF06")); // output [ 119558 ]