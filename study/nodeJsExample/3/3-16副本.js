var flow = require('nimble');
var exec = require('child_process').exec;

function downNodeVersion(version, destination, callback) {
    var url = 'http://nodejs.org/dist/node-v' + version + '.tar.gz';
    var filepath = destination + '/' + version + '.tgz';
    exec('curl' + url + '>' + filepath, callback);
}

flow.series([
    function (callback) {
        flow.parallel([
            function (callback) {
                console.log('Downloading Node v0.4.6...');
                downNodeVersion('0.4.6', '/tmp', callback);
            },

            function (callback) {
                console.log('Downloading Node v0.4.7...');
                downNodeVersion('0.4.7', '/tmp', callback);
            }
        ], callback)
    },
    function (callback) {
        console.log('Creating archive of downloaded files...');
        exec(
            'tar cvf node_distros.tar /tmp/0.4.6.tgz /tmp/0.4.7.tgz',
            function (err, stdout, stderr) {
                console.log('All done!');
                callback();
            }
        )
    }
])