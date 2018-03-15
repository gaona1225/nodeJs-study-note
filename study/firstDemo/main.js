var counter1 = require('./index/counter');
var counter2 = require('./index/counter')

console.log(counter1.count()); //output 1
console.log(counter1.count()); //output 2
console.log(counter2.count()); //output 3

var mainCat = require('./mainCat');
console.log(mainCat.create('mainCat'));