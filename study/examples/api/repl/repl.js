const repl = require("repl");

function initializeContext(context) {
    context.m = "test";
    context.name = "gg";
}

const r = repl.start({prompt: "> "});
initializeContext(r.context);

r.on("reset", initializeContext);