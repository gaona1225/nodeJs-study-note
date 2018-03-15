const crypto = require("crypto");
const cipher = crypto.createCipher("aes192", "a password");

// 使用aes192对称加密算法，将‘a password’这段明文进行加密
var encrypted = "";
cipher.on("readable", () => {
    var data = cipher.read();
    if (data) {
        encrypted += data.toString("hex");
    }
});

cipher.on("end", () => {
    console.log(encrypted); // ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504
});

cipher.write("some clear text data");
cipher.end();


const fs = require("fs");
const cipher2 = crypto.createCipher("aes192", "a pasword");

const input = fs.createReadStream("test.js");
const output = fs.createWriteStream("test.enc");

input.pipe(cipher2).pipe(output);