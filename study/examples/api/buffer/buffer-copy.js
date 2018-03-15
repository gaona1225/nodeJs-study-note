/*
	buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
	拷贝 buf 的一个区域的数据到 target 的一个区域，即便 target 的内存区域与 buf 的重叠。
*/

const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');
console.log(buf1.toString()); //output @���
console.log(buf2.toString()); //output !!!!!!!!!!!!!!!!!!!!!!!!!!

for(let i=0; i<26; i++){
	buf1[i] = i + 97 ; // 97是'a'的十进制ASCII值
}
buf1.copy(buf2,8,16,20); 
console.log(buf1.toString()); // output abcdefghijklmnopqrstuvwxyz
console.log(buf2.toString()); // output !!!!!!!!qrst!!!!!!!!!!!!!!
console.log(buf2.toString('ascii',0,25)); //output !!!!!!!!qrst!!!!!!!!!!!!!