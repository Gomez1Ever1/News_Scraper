const db = require("../models");
module.exports = function (app) {
    app.post("/article/:id", function (req, res) {
        console.log(req.body)
        db.Article.findOne({ _id: req.body.savedArticle.thisId }, function (err, result) {
            console.log(result)
            const clonedResult = {
                headline: result.headline,
                link: result.link,
                art_img: result.art_img,
                summary: result.summary
            };

            db.savedArticle.create(clonedResult)
                .then(function (newArticle) {
                    res.json(newArticle);
                    console.log(newArticle)
                    console.log("Article Saved")
                });
        })
    })
    app.delete("/deleteArticles", function (req, res) {
        db.Article.deleteMany({})
            .then(function (res) {
                res.json(res);
            })
            .catch((err) => res.json(err));
    })
}