var currency = require('./module/currency');
console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50)); // output 45.5

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30)); // output 32.97