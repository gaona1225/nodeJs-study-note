/*
	assert.doesNotThrow(block[,error][,message])
	断言block函数不会抛出错误。当调用assert.doesNotThrow()时，它会立即调用block函数。
	如果 block 函数抛出错误，并且错误类型与 error 参数指定的相同，则抛出 AssertionError。 如果错误类型不相同，或 error 参数是 undefined，则错误回传给调用者。
	抛出了 AssertionError，并且有为 message 参数传值，则 message 的值会被追加到 AssertionError 的消息中
*/

const assert = require('assert');

assert.doesNotThrow(
	() => {
		throw new TypeError('Wrong value'); 
	},
	//SyntaxError // 抛出 TypeError:Wrong value，因为在断言中没有匹配的错误类型 

	//TypeError // 抛出 AssertionError: Got unwanted exception(TypeError)

	TypeError,'Whoopes' // 抛出 AssertionError: Got unwanted exception (TypeError). Whoopsdd
);

