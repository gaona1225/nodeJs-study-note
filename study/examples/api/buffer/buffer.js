/*
	
*/

const buf1 = Buffer.alloc(10); //创建一个长度为 10、且用 0 填充的 Buffer。
console.log(buf1); //output <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.alloc(10,1); //创建一个长度为 10、且用 0x1 填充的 Buffer
console.log(buf2); //output <Buffer 01 01 01 01 01 01 01 01 01 01>

/*
	创建一个长度为10，且未初始化的Buffer。
	这个方法比调用Biffer.alloc()更快。
	但返回的Buffer实例可能包含旧数据。
	因此需要使用fill()或write()重写。
*/
const buf3 = Buffer.allocUnsafe(10); 
console.log(buf3); //output <Buffer 00 00 00 00 00 00 00 00 01 ff>

const buf4 = Buffer.from([1,2,3]); //创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
console.log(buf4); //output <Buffer 01 02 03>

const buf5 = Buffer.from('test'); //创建一个包含 ASCII 字节数组 [0x74, 0x65, 0x73, 0x74] 的 Buffer。
console.log(buf5); //output <Buffer 74 65 73 74>

const buf6 = Buffer.from('test','utf8'); //创建一个包含 UTF-8 字节数组 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
console.log(buf6); //output <Buffer 74 65 73 74>

console.log('-----------------');
const buf7 = Buffer.alloc(6);
console.log(buf7); //output <Buffer 00 00 00 00 00 00>
buf7.fill(1); //对未初始化的Buffer实例，填充值1
console.log(buf7); //output <Buffer 01 01 01 01 01 01>

console.log('------------');
const buf8 = Buffer.alloc(6,'test'); //output <Buffer 74 65 73 74 74 65>
console.log(buf8);