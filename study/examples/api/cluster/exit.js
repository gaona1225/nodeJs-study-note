const cluster = require("cluster");
// const worker = cluster.fork();
// worker.on("exit", function(code, signal){})
/*worker.on("exit", (code, signal) => {
	if (signal) {
		console.log(`worker was kill by signal:${signal}`);
	} else if (code !== 0) {
		console.log(`worker exited with error code:${signal}`);
	} else {
		console.log(`worker success!`);
	}
})*/

// cluster.on("exit", function(worker, code, signal){})
cluster.on("exit", (worker, code, signal) => {
	if (worker.exitedAfterDisconnect === true) {
		console.log("oh, it was just voluntary - no need to worry");
	}
});

worker.kill();