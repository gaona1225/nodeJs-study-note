/*
	buf.lastIndexOf(value[, byteOffset][, encoding])
	与 buf.indexOf() 类似，除了 buf 是从后往前搜索而不是从前往后
*/

const buf = Buffer.from('this is a buffer');
console.log(buf.lastIndexOf('this')); // output 0
console.log(buf.lastIndexOf('is')); //output 5
console.log(buf.lastIndexOf(Buffer.from('a buffer'))); // output 8
console.log(buf.lastIndexOf(97)); // output 8
console.log(buf.lastIndexOf(Buffer.from('a buffer example'))); // output -1
console.log(buf.lastIndexOf(Buffer.from('a buffer example').slice(0,8))); // output 8

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395','ucs2');
console.log(utf16Buffer.lastIndexOf('\u03a3',0,'ucs2')); // output -1
console.log(utf16Buffer.lastIndexOf('\u03a3',-4,'ucs2')); // output 6