/*
	buf.indexOf(value[, byteOffset][, encoding])
	如果 value 是字符串，则 value 根据 encoding 的字符编码进行解析
	如果 value 是Buffer，则 value 会被作为一个整体使用。如果要比较部分 Buffer 可使用 buf.slice()
	如果 value 是数值, 则 value 会解析为一个 0 至 255 之间的无符号八位整数值
*/

const buf = Buffer.from('this is a buffer');
console.log(buf.indexOf('this')); // output 0
console.log(buf.indexOf('is')); //output 2
console.log(buf.indexOf(Buffer.from('a buffer'))); // output 8
console.log(buf.indexOf(97)); // output 8
console.log(buf.indexOf(Buffer.from('a buffer example'))); // output -1
console.log(buf.indexOf(Buffer.from('a buffer example').slice(0,8))); // output 8

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395','ucs2');
console.log(utf16Buffer.indexOf('\u03a3',0,'ucs2')); // output 4
console.log(utf16Buffer.indexOf('\u03a3',-4,'ucs2')); // output 6