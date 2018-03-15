/*
	assert.throws(block[,error][,message])
	期望 block 函数抛出错误。
	如果指定 error，它可以是一个构造函数、正则表达式、或校验函数。
	如果指定 message，当 block 函数抛出错误时，message 会作为错误信息传给 AssertionError。
	error 参数不能是字符串。 如果第二个参数是字符串，则视为不传 error 参数，传入的字符串会被当作是 message 的值
*/

const assert = require('assert');

//构造函数
/*assert.throws(
	() => {
		throw new Error('Wrong value');
	},
	Error //通过 
);*/

//正则表达式
/*assert.throws(
	() => {
		throw new Error('Wrong value');
	},
	/value/ //通过
)*/

//自定义校验函数
assert.throws(
	() => {
		throw new Error('Wrong value');
	},
	function(err){
		if((err instanceof Error) && /value/.test(err)){
			return true;
		}
	},
	'unexpected error'
)

//assert.throws(
//	() => {
//		throw new Error('Wrong value');
//	},/missing foo/,'did not throw with expected message'); //这是错误的！不要这么做！