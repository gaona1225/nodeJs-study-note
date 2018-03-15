const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("你认为Node.js中文网怎么样？", (answer) => {
    console.log(`多谢你的反馈:${answer}`);
    rl.close();
});

rl.on("line", (input) => {
    console.log(`接收到:${input}`);
});

rl.on("pause", () => {
    console.log("Readline 被暂停。");
});

rl.on("resume", () => {
    console.log("Readline 被恢复。");
});

rl.on("SIGINT", () => {
    rl.question("确定要退出吗? ", (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            rl.pause();
        }
    });
});

rl.question("你最喜欢的食物是什么? ", (answer) => {
    console.log(`你最喜欢的食物是 ${answer}`);
});