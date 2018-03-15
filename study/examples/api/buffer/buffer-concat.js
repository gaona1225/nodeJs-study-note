/**
	Buffer.concat(list[,totalLength])
	list <Array> 要合并的 Buffer 实例的数组
	totalLength <Integer> 合并时 list 中 Buffer 实例的总长度
	返回: <Buffer>
	返回一个合并了 list 中所有 Buffer 实例的新建的 Buffer
	如果 list 中没有元素、或 totalLength 为 0 ，则返回一个新建的长度为 0 的 Buffer
*/

const buf1 = Buffer.alloc(2,1);
const buf2 = Buffer.alloc(3,2);
const buf3 = Buffer.alloc(1,0);
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength); //output 6

const bufA = Buffer.concat([buf1,buf2,buf3],totalLength)
console.log(bufA); //output <Buffer 01 01 02 02 02 00> -- 输出buf1\buf2\buf3的合并
console.log(bufA.length); //output 6