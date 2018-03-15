// 域名解析 dns.resolve4() -- 获取IPv4
// 查询域名 passport.baidu.com对应ip，可以通过dns.resolve4()

var dns = require("dns");

dns.resolve4("passport.baidu.com", function (err, address) {
    if (err) {
        throw err;
    }
    console.log(JSON.stringify(address)); // output ["61.135.186.231","111.206.37.245"]
});
