// 域名解析 dns.lookup()
// 查询域名 passport.baidu.com对应ip，可以通过dns.lookup()


/*var dns = require("dns");

dns.lookup("passport.baidu.com", function (err, address, family) {
    if (err) {
        throw err;
    }
    console.log("例子B: " + address); // output 例子B: 111.206.37.245
});*/

// 同一个域名可能对应多个不同的ip。通过配置var options = {all: true};
var dns = require("dns");
var options = {all: true};

dns.lookup("passport.baidu.com", options, function (err, address, family) {
    if (err) {
        throw err;
    }

    console.log("例子B: " + address); // 例子B: [object Object],[object Object]
});

