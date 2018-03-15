var connect = require('connect');
var logger = require('morgan');
var app = connect().use(logger()).use(hello).listen(3000);
