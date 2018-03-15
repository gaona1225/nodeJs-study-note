// 从PostgreSQL数据库中选择记录
var pg = require('pg');
var conString = 'tcp://gaona02@localhost:5432/mydatabase';
var client = new pg.Client(conString);
client.connect();

var query = client.query(
    'SELECT * FROM users WHERE age > $1',
    [40]
);

query.on('row', function (row) {
    console.log(row.name);
});

query.on('end', function () {
    client.end()
});