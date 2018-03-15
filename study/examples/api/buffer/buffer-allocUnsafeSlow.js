/**
	Buffer.allocUnsafeSlow(size)
	size <Integer> 新建的 Buffer 期望的长度
	分配一个大小为 size 字节的新建的没有用0填充的非池 Buffer。
*/

const net = require('net');
const socket = new net.Socket();
//需要保留一小块内存块
const store = [];
console.log(socket);
socket.on('readable',()=>{
	console.log('come in');
	const data = socket.read();

	//为保留的数据分配内存
	const sb = Buffer.allocUnsafeSlow(10);

	//拷贝数据进新分配的内存
	data.copy(sb,0,0,10);
	store.push(sb);
})