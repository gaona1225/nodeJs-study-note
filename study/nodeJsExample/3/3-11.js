const events = require('events');
const net = require('net');
const channel = new events.EventEmitter();
channel.clients = {};
channel.subscription = {};

channel.on('join', (id, client) => {
    this.clients[id] = client;
    this.subscription[id] = (senderId, message) => {
        if (id != senderId) {
            this.clients[id].write(message);
        }
    }
    this.on('broadcast', this.subscription[id]);
});

channel.on('leave', (id) => {
    channel.removeListener('broadcast', this.subscription[id]);
});

channel.on('shutdown', () => {
    channel.emit('broadcast', '', 'Chat has shut down.\n');
    channel.removeAllListener('broadcast');
});

const server = net.createServer((client) => {
    var id = client.remoteAddress + ':' + client.remotePort;
    client.on('connect', () => {
        channel.emit('join', id, client);
    });

    client.on('data', (data) => {
        data = data.toString();
        if (data == 'shutdown\r\n') {
            channel.emit('shutdown');
        }
        channel.emit('broadcast', id, data);
    });

    client.on('close', () => {
        channel.emit('leave', id);
    });
});

server.listen(3000);