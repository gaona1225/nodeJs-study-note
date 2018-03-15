const fs = require("fs");

//异步方法
fs.unlink("/Users/gaona02/Documents/gaona/study/nodeJs/study/examples/api/fs/delTest.js", (err) => {
    if (err) {
        throw err;
    }
    console.log("成功删除delTest.js");
});

//同步方法
fs.unlinkSync("/Users/gaona02/Documents/gaona/study/nodeJs/study/examples/api/fs/delTestSync.js");
console.log("同步删除delTestSync.js");