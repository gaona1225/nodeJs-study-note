/**


Master 18659 is running
worker 18661 started
worker 18663 started
worker 18660 started
worker 18662 started
*/

const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	for (let i=0; i<numCPUs; i++) {
		cluster.fork();
	}

	cluster.on("exit", (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	http.createServer((req, res) => {
		res.writeHead(200);
		res.end("hello world\n");
	}).listen(8000);

	console.log(`worker ${process.pid} started`);
}







