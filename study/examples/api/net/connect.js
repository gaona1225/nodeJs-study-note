const net = require("net");
/*const client = net.createConnection({port: 8124}, () => {
    console.log("connected to server!");
    client.write("world!\r\n");
});

client.on("data", (data) => {
    console.log(data.toString());
    client.end();
});
client.on("edn", () => {
    console.log("disconnected from server");
});*/

const server = net.createConnection((c) => {
    console.log("client connected");

    c.on("end", () => {
        console.log("client disconnected");
    });

    c.write("hello\r\n");
    c.pipe(c);
});

server.on("error", (err) => {
    throw err;
});

server.listen(8124, () => {
    console.log("server bound");
});