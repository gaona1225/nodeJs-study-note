var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.write('hello');
});
app.listen(3000);