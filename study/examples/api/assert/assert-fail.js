/*
	assert.fail(actual,expected,message,operator)
	抛出 AssertionError。 如果 message 的值不为真，则错误信息为 actual 和 expected 的值，并以 operator 分隔。 否则，错误信息为 message 的值
*/

const assert = require('assert');

//assert.fail(1,2,undefined,'>'); //抛出 AssertionError: 1>2

assert.fail(1,2,'haha 1 gt 2 fail','>'); //抛出 AssertionError: haha 1 gt 2 fail