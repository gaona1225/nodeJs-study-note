/*
	buf.readFloatBE(offset[, noAssert])
	buf.readFloatLE(offset[, noAssert])
	offset <Integer> 开始读取的位置，必须满足：0 <= offset <= buf.length - 4
	noAssert <Boolean> 是否跳过 offset 检验？默认: false
	返回: <Number>
	用指定的尾数格式（readFloatBE() 返回大尾数，readFloatLE() 返回小尾数）从 buf 中指定的 offset 读取一个32位浮点值。
	设置 noAssert 为 true 则 offset 可超出 buf 的末尾，但后果是不确定的。
*/

const buf = Buffer.from([1,2,3,4,5,6,7,8]);
console.log(buf.readFloatBE()); // output 2.387939260590663e-38
console.log(buf.readFloatLE()); // output 1.539989614439558e-36
console.log(buf.readFloatBE(1)); // output 9.625513546253311e-38
console.log(buf.readFloatLE(1,true)); // output 6.207162620248253e-36