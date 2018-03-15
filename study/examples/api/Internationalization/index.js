const january = new Date(9e8);
const englist = new Intl.DateTimeFormat("en", {month: "long"});
const spanish = new Intl.DateTimeFormat("es", {month: "long"});
console.log(englist.format(january)); // output January
console.log(spanish.format(january)); // output M01