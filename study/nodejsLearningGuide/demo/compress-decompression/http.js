// 服务端gzip压缩

var http = require("http");
var zlib = require("zlib");

var responseText = "hello world";

var server = http.createServer(function (req, res) {
    var acceptEncoding = req.headers["accept-encoding"];
    if (acceptEncoding.indexOf("gzip") != -1) {
        res.writeHead(200, {
            "Content-encoding" : "gzip"
        });
        console.log("111");
        console.log(responseText);
        res.end(zlib.gzipSync(responseText));
        console.log("222");
        console.log(responseText);
    } else {
        console.log("else");
        res.end(responseText);
    }
});

server.listen("3000");