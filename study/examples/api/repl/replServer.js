const repl = require("repl");

const replSerever = repl.start({prompt: ">$ "});
replSerever.defineCommand("sayhello", {
    help: "打招呼",
    action(name) {
        this.lineParser.reset();
        this.bufferedCommand = "";
        console.log(`你好，${name}!`);
        this.displayPrompt();
    }
});

replSerever.defineCommand("saybye", function saybye(){
    console.log("再见! ");
    this.close();
});

const a = [1,2,3];
a.forEach((v) => {
    console.log(v);
});