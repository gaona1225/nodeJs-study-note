var crypto = require("crypto");

function getRandomSalt(){
    return Math.random().toString().slice(2, 5);
};

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

cryptPwd("123456", getRandomSalt());
// 输出：
// 原始密码：123456
// 加盐后的密码：123456:557
// 加盐密码的md5值：27152df71e2b9dc8e301570ee63dff07

cryptPwd("123456", getRandomSalt());
// 输出：
// 原始密码：123456
// 加盐后的密码：123456:888
// 加盐密码的md5值：03dd02765862312249615b9dfabda71d