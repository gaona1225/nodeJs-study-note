const https = require("https");

const options = {
    hostname: "encrypted.google.com",
    port: 443,
    path: "/",
    method: "GET"
};

const req = https.request(options, (res) => {
    console.log("状态码: ", res.statusCode);
    console.log("请求头: ", res.headers);

    res.on("data", (d) => {
        process.stdout.write(d);
    });
});

req.on("error", (e) => {
    console.error(e);
});

req.end();