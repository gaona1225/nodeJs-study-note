/*
	buf.length
	返回 buf 在字节数上分配的内存量。 注意，这并不一定反映 buf 内可用的数据量
	虽然 length 属性不是不可变的，但改变 length 的值可能会导致不确定、不一致的行为。 那些希望修改一个 Buffer 的长度的应用程序应当将 length 视为只读的，且使用 buf.slice() 创建一个新的 Buffer
*/

const buf = Buffer.alloc(1234);
console.log(buf.length); // output 1234

const buf2 = Buffer.from('buffer');
console.log(buf2.length); // output 6

buf.write('a',0,'ascii');
console.log(buf.toString()); // output a
console.log(buf.length); // output 1234

let buf3 = Buffer.allocUnsafe(10); // let 定义一个变量
buf3.write('abcdefghj',0,'ascii');
console.log(buf3.length); // output 10
buf3 = buf3.slice(0,5);
console.log(buf3.length); // output 5