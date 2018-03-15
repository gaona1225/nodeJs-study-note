var connect = require('connect');
var bodyParser = require('body-parser');
var app = connect().use(bodyParser())
                   .use(function (req, res) {
                        console.log(req.body);
                        console.log(req.files);
                        //res.end('Regisstered new user: ' + req.body.username);
                        res.end('thanks');
                   }).listen(3000);