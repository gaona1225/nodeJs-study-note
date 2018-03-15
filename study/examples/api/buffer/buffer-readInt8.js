/*
	buf.readInt8(offset[, noAssert])
	offset <Integer> 开始读取的位置，必须满足：0 <= offset <= buf.length - 4
	noAssert <Boolean> 是否跳过 offset 检验？默认: false
	返回: <Integer>
	从 buf 中指定的 offset 读取一个有符号的8位整数值。
	设置 noAssert 为 true 则 offset 可超出 buf 的末尾，但后果是不确定的。
	从 Buffer 中读取的整数值会被解析为二进制补码值。
*/

const buf = Buffer.from([-1,5]);
console.log(buf.readInt8(0)); // output -1
console.log(buf.readInt8(1)); // output 5
console.log(buf.readInt8(2)); // output RangeError: Index out of range