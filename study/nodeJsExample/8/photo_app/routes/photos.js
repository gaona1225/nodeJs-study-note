/*var Photo = [];
Photo.push({
    name: 'Node.js Logo',
    path: 'https://nodejs.org/static/images/logos/nodejs-green.png'
});

Photo.push({
    name: 'BaiDu Logo',
    path: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
});

exports.list = function (req, res) {
    res.render('photos', {
        title: 'Photos',
        photos: Photo
    });
}*/

var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var join = path.join;

console.log('router photos.js');
console.log(typeof(Photo));

exports.list = function (req, res) {
    res.render('photos', {
        title: 'Photos',
        photos: Photo
    });
}

exports.list = function (req, res, next) {
    Photo.find({}, function (err, photos) {
        if (err) return next(err);
        res.render('photos', {
            title: 'Photos',
            photos: photos
        });
    });
}

exports.form = function (req, res) {
    res.render('photos/upload', {
        title: 'Photo upload'
    });
}

exports.submit = function (dir) {
    return function (req, res, next) {
        console.log('submit');
        var img = req.files.photo.image;
        var name = req.body.photo.name || img.name;
        var path = join(dir, img.name);
        
        fs.rename(img.path, path, function (err) {
            if (err) {
                return next(err);
            }

            Photo.create({
                name: name,
                path: img.name
            }, function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    }
}

exports.download = function (dir) {
    return function (req, res, next) {
        var id = req.params.id;
        Photo.findById(id, function (err, photo) {
            if (err) return next(err);
            var path = join(dir, photo.path);
            //res.sendfile(path);
            res.download(path, photo.name + '.jpeg');
        });
    }
}