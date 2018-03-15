/*
	buf.values()
	返回: <Iterator>
	创建并返回一个包含 buf 的值（字节）的迭代器。 当 Buffer 使用 for..of 时会自动调用该函数。
*/

const buf = Buffer.from('buffer');
for(const value of buf.values()){
	console.log(value); // output 98 117 102 102 101 114
}

for(const value of buf){
	console.log(value); // output 98 117 102 102 101 114
}