const domain = require("domain");
const d = domain.create();
const fs = require("fs");

function readSomeFile(filename, cb) {
    fs.readFile(filename, "utf-8", d.bind(() => {
        return cb(er, data ? JSON.parse(data) : null);
    }))
}

d.on("error", (er) => {
    console.log("Caught error!", er);
});

d.run(() => {
    process.nextTick(() => {
        setTimeout(() => {
            fs.open("non-existent file", "r", (er, fd) => {
                if (er) throw er;
            });
        },100);
    });
});