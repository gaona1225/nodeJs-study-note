// 服务器server：接收来自客户端的请求，并将客户端请求的地址返回给客户端。
// 客户端client：向服务器发起请求，并将服务器返回的内容打印到控制台

var http = require("http");

// http server 
var server = http.createServer(function (serverReq, serverRes) {
    var url = serverReq.url;
    serverRes.setHeader('Content-Type','text/javascript;charset=UTF-8');
    serverRes.end("您访问的地址是AAA：" + url);
    //serverRes.end("afdsafdsf:" + url, "UTF-8");
});
server.listen(3000);

// http client
var client = http.get("http://127.0.0.1:3000", function (clientRes) {
    clientRes.pipe(process.stdout);
    //clientRes.pipe(process.stdout.setEncoding("UTF-8"));
});