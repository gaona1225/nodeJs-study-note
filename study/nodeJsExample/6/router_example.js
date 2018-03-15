var connect = require('connect');
var router = require('./middleware/router');
var routs = {
    GET: {
        '/users': function (req, res) {
            res.end('tobi, loki, ferret');
        },
        '/users/:id': function (req, res) {
            res.end('user ' + id);
        }
    },
    DELETE: {
        '/users/:id': function (req, res) {
            res.end('deleted user ' + id);
        }
    }
};

connect().use(router(routers)).listen(3000);