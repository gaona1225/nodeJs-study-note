/**
	require:用户在当前模块中加载和使用别动模块，传入一个模块名，返回一个模块导出对象。模块名可使用相对路径（以./开头），或者是绝对路径(以/或C:之类的盘符开头)
*/

var foo = require('./index/foo');

//foo.hello(); -- 通过这种方式调用，需要在foo.js中先将hello方法exports导出，并且在foo.js中不需要单独调用执行hello方法