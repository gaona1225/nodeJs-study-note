const fs = require("fs");

fs.rename("/Users/gaona02/Documents/gaona/study/nodeJs/study/examples/api/fs/renameFileNew.js","/Users/gaona02/Documents/gaona/study/nodeJs/study/examples/api/fs/renameFile.js", (err) => {
    if (err) {
        throw err;
    }
    console.log("重命名完成");
    fs.stat("/Users/gaona02/Documents/gaona/study/nodeJs/study/examples/api/fs/renameFile.js", (err, stats) => {
        if (err) {
            throw err;
        }
        console.log(`文件属性：${JSON.stringify(stats)}`);
    });
});

