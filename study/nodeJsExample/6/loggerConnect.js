// 可配置的Connect中间件组件logger
function setup(format) {
    var regexp = /:(\w+)/g;
    return function logger(req, res, next) {
        var str = format.replace(regexp, function (match, property) {
            return req[property];
        });
        console.log(str);
        next();
    }
}

module.exports = setup;