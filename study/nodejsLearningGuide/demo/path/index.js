var path = require("path");
var filepath = "/Users/gaona02/Documents/gaona/study/nodeJs/study/nodejsLearningGuide/demo/path/desc.txt";

console.log(path.dirname(filepath)); // output /Users/gaona02/Documents/gaona/study/nodeJs/study/nodejsLearningGuide/demo/path
console.log(path.basename(filepath)); // output desc.txt
console.log(path.basename(filepath, ".txt")); // output desc
console.log(path.extname(filepath)); // output .txt

var index = 0;
var compare = function (desc, callback) {
  console.log("[用例%d]: %s", ++index, desc);
  callback();
  console.log("\n");
};

compare("路径为空", function () {
  console.log(path.normalize("")); // output 
});
compare("路径结尾是否带/", function () {
  console.log(path.normalize("/Users/gaona02/Documents/gaona/study/nodeJs/study/nodejsLearningGuide/demo/path"));
  console.log(path.normalize("/Users/gaona02/Documents/gaona/study/nodeJs/study/nodejsLearningGuide/demo/path/"));
});