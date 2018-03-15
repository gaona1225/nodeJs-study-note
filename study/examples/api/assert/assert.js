/*
	assert(value[,message])
	assert.ok()的别名
*/

const assert = require('assert');

assert(true); //通过

assert(1); //通过

//放开下面三种断言则会报错对应注释的错误。
//assert(false); //抛出 "AssertionError: false == true"

//assert(0); //抛出 "AssertionError: 0 == true"

//assert(false, 'it\'s false'); //抛出 "AssertionError: it's false"

assert(true, 'it\'s false'); //通过