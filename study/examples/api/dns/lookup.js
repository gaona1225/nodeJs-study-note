// dns 域名服务器

const dns = require("dns");

const options = {
    family: 6, // IPv6
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup("example.com", options, (err, address, family) => {
    console.log("address:%j family:IPv%s", address, family); // output -- address:"::ffff:93.184.216.34" family:IPv6
});

options.all = true;

dns.lookup("example.com", options, (err, addresses) => {
    console.log("addresses:%j", addresses); // output -- addresses:[{"address":"::ffff:93.184.216.34","family":6}]
});

dns.lookupService("127.0.0.1", 22, (err, hostname, service) => {
    console.log(hostname, service); // output -- localhost ssh
});