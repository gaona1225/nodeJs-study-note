// mongoose 存储
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');

// 注册Schema
var Schema = mongoose.Schema;
var Tasks = new Schema({
    project: String,
    description: String
});
mongoose.model('Task', Tasks);

// 新增
var Task = mongoose.model('Task');
var task = new Task();
task.project = 'Bikeshed';
task.description = 'Paint the bikeshed red.';
task.save(function (err) {
    if (err) throw err;
    console.log('Task saved.');
});

// 查找
var Task = mongoose.model('Task');
Task.find({'project': 'Bikeshed'}, function (err, tasks) {
    for (var i = 0; i< tasks.length; i++) {
        console.log('ID:' + tasks[i]._id);
        console.log(tasks[i].description);
    }
});

// 更新
var Task = mongoose.model('Task');
Task.update(
    {_id: '4e650d344ac74b5a01000001'},
    {description: 'Paint the bikeshed green.'},
    {multi: false},
    function (err, rows_updated) {
        if (err) throw err;
        console.log('Updated.');
    }
);

// 删除
var Task = mongoose.model('Task');
Task.findById('4e650d344ac74b5a01000001', function (err, task) {
    task.remove();
});