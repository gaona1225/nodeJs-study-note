const domain = require("domain");
const d1 = domain.create();
const d2 = domain.create();

let p;
d1.run(() => {
    p = Promise.resolve(42);
});

d2.run(() => {
    p.then((v)=>{
        
    });
});