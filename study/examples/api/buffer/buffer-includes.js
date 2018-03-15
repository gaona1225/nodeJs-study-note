/*
	buf.includes(value[, byteOffset][, encoding])
	相当于buf.indexOf() !== -1。
*/

const buf = Buffer.from('this is a buffer');
console.log(buf.includes('this')); // output true
console.log(buf.includes('is')); //output true
console.log(buf.includes(Buffer.from('a buffer'))); // output true
console.log(buf.includes(97)); // output true
console.log(buf.includes(Buffer.from('a buffer example'))); // output false
console.log(buf.includes(Buffer.from('a buffer example').slice(0,8))); // output true

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395','ucs2');
console.log(utf16Buffer.includes('\u03a3',0,'ucs2')); // output true
console.log(utf16Buffer.includes('\u03a3',-4,'ucs2')); // output true