var Currency = require('./module/currency2');
var canadianDollar = 0.91;

var currency = new Currency(canadianDollar);
console.log(currency.canadianToUS(50)); // output 45.5
console.log(currency.USToCanadian(30)); // output 32.97