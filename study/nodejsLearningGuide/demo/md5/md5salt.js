var crypto = require("crypto");

function cryptPwd(password, salt){
    // 密码"加盐"
    var saltPassword = password + ":" + salt;
    console.log("原始密码:%s", password);
    console.log("加盐后的密码:%s", saltPassword);

    // 加盐密码的md5值
    var md5 = crypto.createHash("md5");
    var result = md5.update(saltPassword).digest("hex");
    console.log("加盐密码的md5值:%s", result);
};

cryptPwd("123456", "abc");
// 输出：
// 原始密码：123456
// 加盐后的密码：123456:abc
// 加盐密码的md5值：51011af1892f59e74baf61f3d4389092

cryptPwd("123456", "bcd");
// 输出：
// 原始密码：123456
// 加盐后的密码：123456:bcd
// 加盐密码的md5值：55a95bcb6bfbaef6906dbbd264ab4531