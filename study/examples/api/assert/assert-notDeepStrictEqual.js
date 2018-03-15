/*
	assert.notDeepStrictEqual(actual,expected[,message])
	如果两个值深度严格相等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则输出默认的错误信息
*/

const assert = require('assert');

assert.notDeepStrictEqual({a:1},{a:'1'}); //通过

//assert.notDeepStrictEqual({a:1},{a:1},'DIY message'); //抛出 AssertionError: DIY message。 输出自定义error message