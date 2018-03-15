const crypto = require("crypto");
const hmac = crypto.createHmac("sha256", "a secret");

hmac.on("readable", () => {
    const data = hmac.read();

    if (data) {
        console.log(data.toString("hex")); // output c5fc97a914621a9199dfda604ffc8ded82de4c09879f8ebe3ccbb541a58f08d9
    }
});

hmac.write("smoe data to hmac");
hmac.end();