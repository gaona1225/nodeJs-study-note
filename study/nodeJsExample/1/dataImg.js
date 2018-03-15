var fs = require('fs');
var http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    fs.createReadStream('/Users/gaona02/Documents/gaona/study/nodeJs/study/nodeJsExample/S1/test.png').pipe(res);
}).listen(3000);
console.log('Server running at http://localhost:3000 Img')