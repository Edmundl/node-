const fs=require('fs');
//writeFile(文件名,内容,回调函数)
fs.writeFile("bbb.txt","jflksajflks",function(err){
	console.log(err);
});