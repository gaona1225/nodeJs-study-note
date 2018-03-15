// 服务端gzip压缩

var http = require("http");
var zlib = require("zlib");
var fs = require("fs");
var filepath = "fileForGzip.html";

var server = http.createServer(function (req, res) {
    var acceptEncoding = req.headers["accept-encoding"];
    var gzip ;

    if (acceptEncoding.indexOf("gzip") != -1) { // 判断是否需要gzip压缩
        gzip = zlib.createGzip();

        // 记得响应 Content-Encoding,告诉浏览器：文件被gzip压缩过--在访问localhost:3000可以看到网络请求中Response Headers中Content-Encoding:gzip
        // 此处
        res.writeHead(200, {
            "Content-Encoding" : "gzip"
        });
        console.log(fs.statSync(filepath).size); // fs.statSync(filepath) 获取filepath文件的所有信息,.size获得文件大小 - 30196
        fs.createReadStream(filepath).pipe(gzip).pipe(res);
    } else {
        fs.createReadStream(filepath).pipe(res);
    }
});

server.listen("3000");