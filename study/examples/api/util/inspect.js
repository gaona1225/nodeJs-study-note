const util = require("util");

console.log(util.inspect(util, { showHidden: true, depth: null }));

class Box {
    constructor(value) {
        this.value = value;
    }
    inspect(depth, options) {
        if (depth < 0) {
            return options.stylize("[Box]", "special");
        }

        const newOptions = Object.assign({}, options, {
            depth: options.depth === null ? null : options.depth - 1
        });

        const padding = " ".repeat(5);
        const inner = util.inspect(this.value, newOptions).replace("/\n/g", `\n${padding}`);
        return `${options.stylize("Box", "special")}<${inner}>`;
    }
}

const box = new Box(true);

util.inspect(box);