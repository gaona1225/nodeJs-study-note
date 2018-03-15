/*
	assert.notEqual(actual,expected[,message])
	使用不等运算符（!=）来测试 actual 和 expected 参数是否不相等。
	如果两个值相等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则输出默认的错误信息。
*/

const assert = require('assert');

assert.notEqual(1,2); //通过

//assert.notEqual(1,1); //抛出 AssertionError: 1!=1

//assert.notEqual(1,'1'); //抛出 AssertionError: 1!='1'

assert.notEqual(1,'1','DIY message'); //抛出 AssertionError: DIY message