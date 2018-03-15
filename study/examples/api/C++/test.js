/**
	“Hello World” 示例是一个简单的插件，用 C++ 编写，相当于以下 JavaScript 代码：
	module.exports.hello = () => 'world';
*/

const addon = require('/Users/gaona02/Documents/gaona/study/nodeJs/study/examples/api/C++/addon');

console.log('This should be eight:', addon.add(3, 5));