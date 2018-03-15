/*var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello world!');
}).listen(3000);*/

/*var http = require('http');
http.createServer(function (req, res) {
    var body = 'Hello World 222!';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', body.length);
    res.end(body);
}).listen(3000);*/

var http = require('http');
http.createServer(function (req, res) {
    var url = 'https://www.baidu.com';
    var body = '<p>Redirecting to <a href = "' + url + '">' + url + '</a></p>';
    res.setHeader('Location', url);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', body.length);
    res.setHeader('Referer', body.length);
    // 配置状态为302 浏览器 自动302重定向到url
    res.statusCode = 302;
    res.end(body);
}).listen(3000);