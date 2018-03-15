/*
	buf.swap16() 返回: <Buffer> buf 的引用 
	将 buf 解析为一个无符号16位的整数数组，并且以字节顺序原地进行交换。 如果 buf.length 不是2的倍数，则抛出 RangeError 错误。
	buf.swap32() 返回: <Buffer> buf 的引用
	将 buf 解析为一个无符号32位的整数数组，并且以字节顺序原地进行交换。 如果 buf.length 不是4的倍数，则抛出 RangeError 错误。
	buf.swap64() 返回: <Buffer> buf 的引用
	将 buf 解析为一个64位的数值数组，并且以字节顺序原地进行交换。 如果 buf.length 不是8的倍数，则抛出 RangeError 错误。
*/

const buf1 = Buffer.from([0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8]);
console.log(buf1); // output <Buffer 01 02 03 04 05 06 07 08>
buf1.swap16();
console.log(buf1); // output <Buffer 02 01 04 03 06 05 08 07>

const buf2 = Buffer.from([0x1,0x2,0x3]);
buf2.swap16(); // output 奇数长度报错 RangeError: Buffer size must be a multiple of 16-bits