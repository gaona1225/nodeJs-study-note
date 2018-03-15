const cert = require('crypto').Certificate();
const spkac = getSpkacSomehow();
const challenge = cert.exportChallenge(spkac);
console.log(challenge.toString('utf8'));

// 返回公钥
const publicKey = cert.exportPublicKey(spkac);
console.log(publicKey);

console.log(cert.verifySpkac(Buffer.from(spkac))); // output true or false