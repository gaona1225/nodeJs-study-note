var http = require('http');
var formidable = require('formidable');
var server = http.createServer(function (req, res) {
    switch (req.method) {
        case 'GET':
            show(res);
            break;
        case 'POST':
            upload(req, res);
            break;
    }
});

server.listen(3000);

function show(res) {
    var html = '<html></head><title>Todo List</title></head><body>'
             + '<form method = "post" action = "/" enctype = "multipart/form-data">'
             + '<p><input type = "text" name = "name" /></p>'
             + '<p><input type = "file" name = "file" /></p>'
             + '<p><input type = "submit" value = "Upload" /></p>'
             + '</form></body></html>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

function upload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end('Bad Request: expectiong multipart/form-data');
        return;
    }

    var form = new formidable.IncomingForm();

    form.on('field', function (field, value) {
        console.log('field');
        console.log(value);
    });

    form.on('file', function (name, file) {
        console.log(name);
        console.log(file);
    });

    form.on('progress', function (bytesReceived, bytesExpected) {
        var percent = Math.floor(bytesReceived / bytesExpected * 100);
        console.log(percent);
    });

    form.on('end', function () {
        res.end('upload complete!');
    });
    form.parse(req);
}

function isFormData(req) {
    console.log(req.headers['content-type']);
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}