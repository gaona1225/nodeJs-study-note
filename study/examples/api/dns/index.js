// dns 域名服务器

const dns = require("dns");

dns.lookup("iana.org", (err, address, family) => {
    console.log("IP 地址:%j 地址族: IPv%s", address, family); // output -- IP 地址:"192.0.43.8" 地址族: IPv4
});

dns.resolve4("archive.org", (err, address) => {
    if (err) {
        throw err;
    }

    console.log(`IP 地址是: ${JSON.stringify(address)}`); // output -- IP 地址是: ["8.7.198.45"]

    address.forEach((a) => {
        dns.reverse(a, (err, hostname) => {
            /*if (err) {
                throw err;
            }*/

            console.log(`IP地址 ${a} 逆向解析到域名：${JSON.stringify(hostname)}`); // output -- IP地址 8.7.198.45 逆向解析到域名：undefined
        });
    });
});