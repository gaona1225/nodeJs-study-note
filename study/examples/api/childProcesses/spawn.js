/**
	衍生子进程的能力

stdout:total 8
drwxr-xr-x     5 root  wheel   170B  8  2  2015 X11
lrwxr-xr-x     1 root  wheel     3B  6 21  2016 X11R6 -> X11
drwxr-xr-x     3 root  wheel   102B  4 20  2016 adic
drwxr-xr-x  1054 root  wheel    35K  6 21  2016 bin
drwxr-xr-x   258 root  wheel   8.6K 10  8  2016 include
drwxr-xr-x   288 root  wheel   9.6K 10  8  2016 lib
drwxr-xr-x   184 root  wheel   6.1K  6 21  2016 libexec
drwxr-xr-x    15 root  wheel   510B 10 12  2016 local
drwxr-xr-x   244 root  wheel   8.1K  8 10  2016 sbin
drwxr-xr-x    46 root  wheel   1.5K 10  8  2016 share
drwxr-xr-x     4 root  wheel   136B  5  5  2016 standalone

子进程退出码:0

*/

const spawn = require('child_process').spawn;
const ls = spawn('ls',['-lh','/usr']);

ls.stdout.on('data',(data)=>{
	console.log(`stdout:${data}`); // output 8
})

ls.stderr.on('data',(data)=>{
	console.log(`stderr:${data}`); // output
})

ls.on('close',(code)=>{
	console.log(`子进程退出码:${code}`); // output 0
})