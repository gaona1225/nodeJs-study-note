/*
	buf.keys()
	创建并返回一个包含 buf 键名（索引）的迭代器
*/

const buf = Buffer.from('buffer');
console.log(buf.keys()); // output {}
for(const key of buf.keys()){
	console.log(key); // output 0,1,2,3,4,5
}