const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Foo", "bar");
    res.setHeader("Set-Cookie", ["foo=bar", "bar=baz"]);
    const headers = res.getHeaders();
    console.log(headers);
});