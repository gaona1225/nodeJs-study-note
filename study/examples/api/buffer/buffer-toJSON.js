/*
	buf.toJSON()
	返回: <Object>
	返回 buf 的 JSON 格式。 当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该函数。
*/

const buf = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf);

console.log(json); // output {"type":"Buffer","data":[1,2,3,4,5]}

const copy = JSON.parse(json,(key,value) => {
	return value && value.type == 'Buffer' ? Buffer.from(value.data) : value ;
});

console.log(copy); // output <Buffer 01 02 03 04 05>