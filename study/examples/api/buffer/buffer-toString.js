/*
	buf.toString([encoding[, start[, end]]])
	encoding <String> 解码使用的字符编码。默认: 'utf8'
	start <Integer> 开始解码的字节偏移量。默认: 0
	end <Integer> 结束解码的字节偏移量（不包含）。 默认: buf.length
	返回: <String>
	根据 encoding 指定的字符编码解码 buf 成一个字符串。 start 和 end 可传入用于只解码 buf 的一部分。
*/

const buf1 = Buffer.allocUnsafe(26);
for(let i=0; i<26; i++){
	buf1[i] = i + 97; 
}
console.log(buf1.toString()); // output abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('ascii')); // output abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('ascii',0,5)); // output abcde

const buf2 = Buffer.from('test');
console.log(buf2.toString('hex')); // output 74657374
console.log(buf2.toString('utf8',0,3)); // output tes
console.log(buf2.toString(undefined,0,3)); // output tes