// 访问 https://localhost:3000
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('/Users/gaona02/Documents/gaona/study/nodeJs/study/nodeJsExample/4/key.pem'),
    cert: fs.readFileSync('/Users/gaona02/Documents/gaona/study/nodeJs/study/nodeJsExample/4/key-cert.pem')
}

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(3000);