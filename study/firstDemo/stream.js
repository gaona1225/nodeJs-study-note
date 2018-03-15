/**
	Stream基于事件机制工作，所有Stream的实例都继承于NodeJS提供的EventEmitter。	
	doSomething(chunk);--代码中data事件会源源不断地被触发，不管doSomething函数是否处理得过来。
	在doSomething函数加上回调，因此我们可以在处理数据前暂停数据读取，并在处理数据后继续读取数据。
*/

var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst); //为数据目标创建一个只写数据流。

/*rs.on('data',function(chunk){
	rs.pause(); 
	doSomething(chunk,function(){ 
		rs.resume();
	});
})*/

/**
	根据.write方法的返回值来判断传入的数据是写入目标了，还是临时放在了缓存了，并根据drain事件来判断什么时候只写数据流已经将缓存中的数据写入目标，可以传入下一个待写数据了
*/
rs.on('data',function(chunk){
	if(ws.write(chunk) === false){
		rs.pause();
	}
})

rs.on('end',function(){
	cleanUp();
})

rs.on('drain',function(){
	rs.resume()
})