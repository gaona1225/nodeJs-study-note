// mongoDB 存储

// 连接MongoDB
var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('mydatabase', server, {w: 1});

// 访问MongoDB集合
client.open(function (err) {
    if (err) throw err;
    client.collection('test_insert', function (err, collection) {
        if (err) throw err;
        console.log('We are now able to perform queries.');
        var _id = new client.bson_serializer.ObjectID('4e650d344ac74b5a01000001');
        // 更新MongoDB集合
        collection.update(
            {_id: _id},
            {$set: {"title": "I ate too much cake"}},
            {safe: true},
            function (err) {
                if (err) throw err;
            }
        );

        // 插入MongoDB集合
        collection.insert(
            {
                "title": "I like cake",
                "body": "It is quite good."
            },
            {safe: true},
            function (err, documents) {
                if (err) throw err;
                console.log('Document ID is: ' + documents[0]._id);
            }
        );

        // 搜索
        collection.find({"title": "I like cake"}).toArray(
            function (err, results) {
                if (err) throw err;
                console.log(results);
            }
        );

        // 删除
        collection.remove(
            {_id: _id},
            {safe: true},
            function (err) {
                if (err) throw err;
            }
        );
    });
});