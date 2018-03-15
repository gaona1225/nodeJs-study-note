/**
	使用NodeJS内置的fs模块实现大文件拷贝.
	使用fs.readFileSync从源路径读取文件内容，并使用fs.writeFileSync将文件内容写入目标路径
	process是一个全局变量，可通过process.argv获得命令行参数。由于argv[0]固定等于NodeJS执行程序的绝对路径，argv[1]固定等于主模块的绝对路径，因此第一个命令行参数从argv[2]这个位置开始
	一次性把所有文件内容都读取到内存中后再一次性写入磁盘的方式不适合拷贝大文件，内存会爆仓。对于大文件，我们只能读一点写一点，直到完成拷贝
	fs.createReadStream(path,[options]) -- path(string):欲读取的文件路径。options(object)数组对象包含的属性。
	使用fs.createReadStream创建了一个源文件的只读数据流，并使用fs.createWriteStream创建了一个目标文件的只写数据流，并且用pipe方法把两个数据流连接了起来。连接起来后发生的事情，说得抽象点的话，水顺着水管从一个桶流到了另一个桶。
*/

var fs = require('fs');

function copy(src,dst){
	//fs.writeFileSync(dst, fs.readFileSync(src)) ;
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv){
	copy(argv[0],argv[1]);
}

main(process.argv.slice(2));