const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);

myConsole.log("你好世界");
myConsole.log("你好%s","高高");
myConsole.error(new Error("错误信息"));
const name = "描述";
myConsole.warn(`警告${name}`);