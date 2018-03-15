/*
	buf.fill(value[, offset[, end]][, encoding])
	如果未指定 offset 和 end，则填充整个 buf。 这个简化使得一个 Buffer 的创建与填充可以在一行内完成。
	value 如果不是一个字符串或整数，则会被强行转换为 uint32 值。
	如果 fill() 操作的最后一次写入的是一个多字节字符，则只有字符中适合 buf 的第一个字节会被写入。
*/

const b = Buffer.allocUnsafe(50).fill('h'); 
console.log(b.toString()); //output hhhh....hhh

console.log(Buffer.allocUnsafe(3).fill('\u4e2d').toString()); //output 中
console.log('范德萨');