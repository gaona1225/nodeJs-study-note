var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photo_app', {useMongoClient: true});

var schema = new mongoose.Schema({
    name: String,
    path: String
});

var photos = mongoose.model('Photo', schema);


module.exports = photos;

/*var photos = [];
photos.push({
    name: 'Node.js Logo',
    path: 'https://nodejs.org/static/images/logos/nodejs-green.png'
});

photos.push({
    name: 'BaiDu Logo',
    path: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
});

module.exports = photos;*/