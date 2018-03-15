// 简单的压缩、解压缩

var fs = require("fs");
var zlib = require("zlib");

// 压缩
var gzip = zlib.createGzip();

var inFile = fs.createReadStream("fileForCompress.txt");
var out = fs.createWriteStream("fileForCompress.txt.gz");
inFile.pipe(gzip).pipe(out);

// 解压
var gunzip = zlib.createGunzip();
var inFileGz = fs.createReadStream("fileForDecompress.txt.gz");
var outGz = fs.createWriteStream("fileForDecompress.txt");
inFileGz.pipe(gunzip).pipe(outGz);