var http = require('http');
var url = require('url');
var items = [];

http.createServer(function (req, res) {
    /*req.setEncoding('utf8');
    req.on('data', function (chunk) {
        console.log('parsed', chunk);
    });

    req.on('end', function () {
        console.log('done parsing');
    });*/
    console.log('aa');
    switch (req.method) {
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function (chunk) {
                item += chunk;
            });
            req.on('end', function () {
                items.push(item);
                res.end('OK\n')
            });
            break;

        case 'GET':
            var body = items.map(function (item, i) {
                return i + ') ' + item;
            }).join('\n');
            res.setHeader('Content-Type', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain;charset="utf-8"');
            res.end(body);
            break;

        case 'DELETE':
            var path = url.parse(req.url).pathname;
            var i = parseInt(path.slice(1), 10);

            if (isNaN(i)) {
                res.statusCode = 400;
                res.end('Invalid item id');
            } else if (!items[i]) {
                res.statusCode = 404;
                res.end('Item not found');
            } else {
                items.splice(i, 1);
                res.end('OK\n');
            };
            break;
    }
}).listen(3000);