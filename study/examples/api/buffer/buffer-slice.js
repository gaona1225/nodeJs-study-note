/*
	buf.slice([start[, end]])
	start <Integer> 新建的 Buffer 开始的位置。 默认: 0
	end <Integer> 新建的 Buffer 结束的位置（不包含）。 默认: buf.length
	返回: <Buffer>
	返回一个指向相同原始内存的新建的 Buffer，但做了偏移且通过 start 和 end 索引进行裁剪。
	注意，修改这个新建的 Buffer 切片，也会同时修改原始的 Buffer 的内存，因为这两个对象所分配的内存是重叠的。
	指定负的索引会导致切片的生成是相对于 buf 的末尾而不是开头。
*/

const buf1 = Buffer.allocUnsafe(26);
console.log(buf1); // output <Buffer 00 00 00 00 00 00 00 00 58 3b 1f 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00>
for(let i=0; i<26; i++){
	buf1[i] = i + 97;
}
console.log(buf1.toString()); // output abcdefghijklmnopqrstuvwxyz
const buf2 = buf1.slice(0,3);

console.log(buf2.toString('ascii',0,buf2.length)); // output abc
buf1[0] = 33 ;
console.log(buf2.toString('ascii',0,buf2.length)); // output !bc