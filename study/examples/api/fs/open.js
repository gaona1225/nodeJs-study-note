const fs = require("fs");

fs.open("/Users/gaona02/Documents/gaona/study/nodeJs/study/examples/api/fs/openFile.js", "wx", (err, fd) => {
    if (!err) {
        if (err.code === "EEXIST") {
            console.error("openFile already exists");
            return;
        }

        throw err;
    }

    // writeMyData(fd);
});

fs.open("/Users/gaona02/Documents/gaona/study/nodeJs/study/examples/api/fs/openFile.js", "r", (err, fd) => {
    if (err) {
        if (err.code === "ENOENT") {
            console.error("openFile does not exist");
            return;
        }
        throw err;
    }
    // readMyData(fd);
});