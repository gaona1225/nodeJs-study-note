/**
	Buffer.alloc(size[,fill[,encoding]])
	size <Integer> 新建的 Buffer 期望的长度
	fill <String> | <Buffer> | <Integer> 用来预填充新建的 Buffer 的值。 默认: 0
	encoding <String> 如果 fill 是字符串，则该值是它的字符编码。 默认: 'utf8'
	分配一个大小为 size 字节的新建的 Buffer 。 如果 fill 为 undefined ，则该 Buffer 会用 0 填充。
*/

const buf = Buffer.alloc(5);
console.log(buf); //output <Buffer 00 00 00 00 00>
buf.fill(6); 
console.log(buf); //output <Buffer 06 06 06 06>

console.log('-------');
const buf2 = Buffer.alloc(5);
console.log(buf2); //output <Buffer 00 00 00 00 00>
buf2.fill('a');
console.log(buf2); //output <Buffer 61 61 61 61 61>

console.log('------');
const buf3 = Buffer.alloc(5,'b');
console.log(buf3); //output <Buffer 62 62 62 62 62>

console.log('--------');
const buf4 = Buffer.alloc(11,'aGVsbG8gd29ybGQ=','base64');
console.log(buf4); //output <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>