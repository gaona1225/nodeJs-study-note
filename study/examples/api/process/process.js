process.env.test = null;
console.log(process.env.test);

process.env.test = undefined;
console.log(process.env.test);

process.env.testB = 1;
console.log(process.env.testB);

delete process.env.testB;
console.log(process.env.testB);

if (process.getgid) {
    console.log(`Current gid:${process.getgid()}`);
}

console.log(`This platform is ${process.platform}`);


