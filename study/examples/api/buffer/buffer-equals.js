/*
	buf.equals(otherBuffer)
	如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。
*/

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('414243','hex');
const buf3 = Buffer.from('ABCD');

console.log(buf1.equals(buf1)); //output true
console.log(buf1.equals(buf2)); //output true
console.log(buf2.toString()); //output ABC
console.log(buf1.equals(buf3)); //output false