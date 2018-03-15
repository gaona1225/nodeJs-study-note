const cluster = require("cluster");
const PORT = +process.env.PORT || 1337;

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();

    cluster.on("disconnect", (workder) => {
        console.error("disconnect!");
        cluster.fork();
    });
} else {
    const domain = require("domain");

    const server = require("http").createServer((req, res) => {
        const d = domain.create();
        d.on("error", (err) => {
            console.error(`error ${err.stack}`);

            try {
                const killtimer = setTime(() => {
                    process.exit(1);
                },30000) ;

                killtimer.unref();

                server.close();

                cluster.worker.disconnect();

                res.statusCode = 500;
                res.setHeader("content-type", "text/plain");
                res.end("0ops, there was a problem!\n");
            } catch (er2) {
                console.error(`Error sending 500! ${er2.stack}`);
            }
        });

        d.add(req);
        d.add(res);

        d.run(() => {
            handleRequest(req, res);
        });
    });
    server.listen(PORT);
}

function handleRequest(req, res){
    switch (req.url) {
        case "/error":
            setTimeout(() => {
                flerb.bark();
            }, timeout);
            break;
        default:
            res.end("ok");
    }
}