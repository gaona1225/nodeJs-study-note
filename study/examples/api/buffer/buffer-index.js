/*
	索引操作符 [index] 可用于获取或设置 buf 中指定 index 位置的八位字节。 这个值指向的是单个字节，所以合法的值范围是的 0x00 至 0xFF（十六进制），或 0 至 255（十进制）
*/

const str = 'Node.js';
const buf = Buffer.allocUnsafe(str.length);

for(let i=0; i<str.length;i++){
	buf[i] = str.charCodeAt(i);
}
console.log(buf.toString('ascii')); //output Node.js