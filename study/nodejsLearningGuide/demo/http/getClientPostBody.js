/**
获取post请求参数
通过curl构造post请求
curl -d 'nick=casper&hello=world' http://127.0.0.1:3000
*/
var http = require("http");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(function (req, res) {
    var body = "";
    req.on("data", function(thrunk){
        body += thrunk;
    });
    req.on("end", function () {
        console.log("post body is:" + body);
        res.end("ok");
    });
});
server.listen(3000);