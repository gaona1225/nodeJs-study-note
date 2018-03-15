/*
	assert.deepEqual(actual,expected[,message])
	测试actual和expected参数是否深度相等。原始值会适应想等运算符(==)进行比较。
	只比较可枚举的自身属性。 deepEqual() 不测试对象的原型、连接符、或不可枚举的属性。 这会引起一些潜在的意料之外的结果。
	深度相等意味着子对象的可枚举的自身属性也会被比较
	如果两个值不相等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则输出默认的错误信息。
*/

const assert = require('assert');

assert.deepEqual(Error('a'),Error('b')) //注意：这不会抛出 AssertionError！因为 Error 对象的属性是不可枚举的

const obj1 = {
	a:{
		b:1
	}
};

const obj2 = {
	a:{
		b:2
	}
};

const obj3 = {
	a:{
		b:1
	}
}

const obj4 = Object.create(obj1);

assert.deepEqual(obj1,obj1); //通过，对象与自身相等。

//assert.deepEqual(obj1,obj2); // 抛出 AssertonError:{a:{b:1}} deepEqual{a:{b:2}}。b的值不同。
//assert.deepEqual(obj1,obj2,'diy message');  // 抛出 AssertonError:diy message。输出自定制message。

assert.deepEqual(obj1,obj3); //通过，两个对象相等。

//assert.deepEqual(obj1,obj4); // 抛出 AssertError:{a:{b:1}} deepEqual{} 原型会被忽略。