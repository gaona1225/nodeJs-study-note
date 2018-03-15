var net = require('net');
var server = net.createServer((socket) => {
    socket.on('data', (data) => {
        socket.write(data);
    });
});

server.listen(3000);