class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAILS !!!!');
    }
}

module.exports = new NewsController();

//require để sữ dụng ở nơi khác
// const newsController = require('./NewsController')
