const Course = require('./../models/Course');
const { mutipleMongooseToObject } = require('../../util/monggoose');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({}) // tương tác với database để lấy ra json
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
