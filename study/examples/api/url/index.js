const url = require("url");
const myURL = url.parse("https://user:pass@sub.host.com:8080/p/a/t/h?query=string#bar");
console.log(myURL.hash);
console.log(myURL.href);
console.log(myURL.port);
console.log(myURL.query);
console.log(myURL.origin);
console.log(myURL.hostname);
console.log(myURL.password);