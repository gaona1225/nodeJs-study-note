const domain = require("domain");
const http = require("http");
const serverDomain = domain.create();

serverDomain.run(()=>{
    http.createServer((req, res) => {
        const reqd = domain.create();
        reqd.add(req);
        reqd.add(res);

        reqd.on("error", (err) => {
            console.error("Error", er, req.url);
            try {
                res.writeHead(500);
                res.end("Error occurred, sorry.")
            } catch (err2) {
                console.log("Error sending 500", er2, req.url);
            }
        });
    }).listen(1337);
});