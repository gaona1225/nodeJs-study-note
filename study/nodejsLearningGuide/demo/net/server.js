var net = require("net");
var PORT = 3000;
var HOST = "127.0.0.1";

var server = net.createServer(function (socket) {
    console.log("服务端：收到来自客户端的请求");

    socket.on("data", function (data) {
        console.log("服务端：收到客户端数据，内容为{" + data + "}");

        socket.write("你号，我是服务端");
    });

    socket.on("close", function () {
        console.log("服务端：客户端连接断开");
    });
});
server.listen(PORT, HOST, function () {
    console.log("服务端：开始监听来自客户端的请求");
});

console.log( server.address());