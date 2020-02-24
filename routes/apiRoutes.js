const db = require("../models");
module.exports = function (app) {
    app.post("/article/:id", function (req, res) {
        db.Article.findOne({ _id: req.body.thisId }, function (result) {
            console.log(result)
            db.savedArticle.create(result)
                .then(function (newArticle) {
                    res.json(newArticle);
                    console.log("Article Saved")
                });
        })
    })
    app.delete("/deleteArticles", function (req, res) {
        db.Article.deleteMany({})
            .then(function () {
                console.log("fresh scrape")
            })
            .catch((err) => res.json(err));
    })
}