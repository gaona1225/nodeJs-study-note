// DiffieHellman 共享密钥

const crypto = require("crypto");
const assert = require("assert");

const alice = crypto.createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

assert.strictEqual(aliceSecret.toString("hex"), bobSecret.toString("hex"));