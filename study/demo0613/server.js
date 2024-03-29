/*
	服务器模块
	node index.js之后浏览器访问http://localhost:8888/
*/

var http = require("http");
var url = require("url");


function start(route, handle) {
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle,pathname, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("server has start");
}

exports.start = start;