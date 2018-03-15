var head = require('./cat/head');
var body = require('./cat/body');

exports.create = function(name){
	return {
		name : name,
		head : head.create(),
		body : body.create()
	}
}