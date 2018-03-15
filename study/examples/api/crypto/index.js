const crypto = require("crypto");
const key = crypto.pbkdf2Sync("secret", "salt", 100000, 512, "sha512");
console.log(key.toString("hex")); // output c5fc97a914621a9199dfda604ffc8ded82de4c09879f8ebe3ccbb541a58f08d9