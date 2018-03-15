const tls = require("tls");
const fs = require("fs");
const options = {
    key: fs.readFileSync("client-key.pem"),
    cert: fs.readFileSync("client-cert.pem"),
    ca: [fs.readFileSync("server-cert.pem")]
}

const socket = tls.connect(8000, options, () => {
    console.log("client connected", socket.authorized ? "authorized" : "unauthorized");
    process.stdin.pipe(socket);
    process.stdin.resume();
});
socket.setEncoding("utf8");
socket.on("data", () => {
    console.log(data);
});
socket.on("end", () => {
    server.close();
});