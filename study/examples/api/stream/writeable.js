const stream = require("stream");

/*function writeOneMillionTimes(writer, data, encoding, callback) {
    let i = 1000000;
    write();
    function write() {
        let ok = true;
        do {
            i--;
            if (i === 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok) 
        if (i > 0) {
            writer.once("drain", write);
        }
    }
};*/
const fs = require("fs");
const file = fs.createWriteStream("example.txt");

file.write("hello, ");
file.end("world!");