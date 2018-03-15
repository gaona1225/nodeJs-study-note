/*
	buffer.INSPECT_MAX_BYTES
	<Integer> 默认: 50
	当调用 buf.inspect() 时返回的最大字节数。 可以被用户模块重写。 详见 util.inspect() 了解更多 buf.inspect() 的行为。
	注意，这个属性是在通过 require('buffer') 返回的 buffer 模块上，而不是在 Buffer 的全局变量或 Buffer 实例上。

	buffer.kMaxLength
	<Integer> 分配给单个 Buffer 实例的最大内存
*/

const buf = Buffer.allocUnsafe(256);
const len = buf.write('\U00bd + \U00bc = \u00be',0);
console.log(`${len}个字节：${buf.toString('utf8',0,len)}`); // output 18个字节：U00bd + U00bc = ¾