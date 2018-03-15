/**
	为了使 Buffer 实例的创建更可靠、更不容易出错，各种 new Buffer() 构造函数已被 废弃，并由 Buffer.from()、Buffer.alloc()、和 Buffer.allocUnsafe() 方法替代
	Buffer.from(array) 返回一个新建的包含所提供的字节数组的副本的 Buffer
*/

const buf = Buffer.from('hello world','ascii');
console.log(buf); //output <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf.toString('hex')); //output 68656c6c6f20776f726c64
console.log(buf.toString('base64')); //output aGVsbG8gd29ybGQ=

console.log('--------------');

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

const buf1 = Buffer.from(arr); //拷贝arr的内容
console.log(buf1); //output <Buffer 88 a0>

const buf2 = Buffer.from(arr.buffer); //与 `arr` 共享内存
console.log(buf2); //output <Buffer 88 13 a0 0f>

console.log('-------');
arr[1] = 6000;
console.log(buf1); //output <Buffer 88 a0>
console.log(buf2); //output <Buffer 88 13 70 17>

console.log('-------');
const arr2 = new Uint16Array(20);
const buf3 = Buffer.from(arr2.buffer,0,16);
console.log(buf3); //output <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(buf3.length); //output 16

console.log('-----------');
const buf4 = Buffer.from([7,2,6]);
for(var b of buf4){
	console.log(b); //output 7,2,6
	console.log(buf4.values()); //output {},{},{}
	console.log(buf4.keys()); //output {},{},{}
}