var http = require("http");

var server = http.createServer(function(req, res){
    res.writeHead(200, "ok", {
        "Context-Type": "text/plain"
    });
    res.end("hello");
});
server.listen(3000);