/**
	Buffer.from(arrayBuffer[, byteOffset[, length]])
	arrayBuffer <ArrayBuffer> TypedArray 或 ArrayBuffer 的 .buffer 属性
	byteOffset <Integer> 从 arrayBuffer 开始拷贝的位置。 默认: 0
	length <Integer> 从 arrayBuffer 拷贝多少字节。 默认: arrayBuffer.length - byteOffset
	当传入一个 TypedArray 实例的 .buffer 属性的引用时，这个新建的 Buffer 会像 TypedArray 那样共享同一分配的内存。
*/

const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

const buf = Buffer.from(arr.buffer); //与 `arr` 共享内存
console.log(buf); //outpu 输出: <Buffer 88 13 a0 0f>

arr[1] = 6000; // 改变原始的 Uint16Array 也会改变 Buffer
console.log(buf); //output <Buffer 88 13 70 17>

const ab = new ArrayBuffer(10);
const bufNew = Buffer.from(ab,0,2);
console.log(bufNew.length); //output 2

console.log('------');
const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);
console.log(buf1); //output <Buffer 62 75 66 66 65 72>
console.log(buf2); //output <Buffer 62 75 66 66 65 72>
buf1[0] = 0x61;
console.log(buf1.toString()); //output auffer
console.log(buf2.toString()); //output buffer

console.log('---------');
const bufStr1 = Buffer.from('this is a test');
console.log(bufStr1.toString()); //output this is a test
console.log(bufStr1.toString('ascii')); //output this is a test

const bufStr2 = Buffer.from('7468697320697320612074c3a97374','hex');
console.log(bufStr2.toString()); //output this is a tést