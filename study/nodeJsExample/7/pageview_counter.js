// 一个使用session的页面浏览计数器
var connect = require('connect');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var sessionOpt = {
    key: 'myapp_sid',
    cookie: {maxAge: new Date().getTime() * 24, secure: true}
}
var app = connect()
            .use(cookieParser('keyboard cat'))
            .use(session(sessionOpt))
            .use(function (req, res, next) {
                var sess = req.session;
                if (sess.views) {
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<p>views: ' + sess.views + '</p>');
                    res.end();
                    sess.views ++;
                } else {
                    sess.views = 1;
                    res.end('welcome to the session demo. refresh!');
                }
            });
app.listen(3000);
