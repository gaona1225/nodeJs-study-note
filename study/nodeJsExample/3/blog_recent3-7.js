var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    getTitles(res);
}).listen(3000);

var getTitles = (res) => {
    fs.readFile('./titles.json', (err, data) => {
        if (err) {
            hadError(err, res);
        } else {
            getTemplate(JSON.parse(data.toString()), res);
        }
    });
}

var getTemplate = (titles, res) => {
    fs.readFile('./template.html', (err, data) => {
        if (err) {
            hadError(err, res);
        } else {
            formatHtml(titles, data.toString(), res);
        }
    });
};

var formatHtml = (titles, tmpl, res) => {
    var html = tmpl.replace('%', titles.join('<li></li>'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
};

var hadError = (err, res) => {
    console.log(err);
    res.end('Server Error');
};