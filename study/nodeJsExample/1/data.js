var fs = require('fs');
var stream = fs.createReadStream('/Users/gaona02/Documents/gaona/study/nodeJs/study/nodeJsExample/S1/resource.json');
stream.on('data', (chunk) => {
    console.log(chunk);
});
stream.on('end', () => {
    console.log('finish');
});