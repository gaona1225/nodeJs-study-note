/**
	Buffer.compare(buf1,buf2)
	比较buf1和buf2，通常用于Buffer实例数组的排序。相当于调用buf1.compare(buf2)。
*/

const buf1 = Buffer.from('1234'); 
console.log(buf1); //out <Buffer 31 32 33 34> －－ ascii码表上对应1的十六进制表示是31

const buf2 = Buffer.from('0123');
console.log(buf2); //output <Buffer 30 31 32 33>

const arr = [buf1,buf2];
console.log(arr.sort(Buffer.compare)); //output [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]


const bufA = Buffer.from('ABC');
const bufB = Buffer.from('BCD');
console.log(bufA.compare(bufB)); //bufB为目标，bufA为源，如果bufB和bufA相同返回0，如果bufB在bufA前面返回1，后面返回-1