const db = require("../models");
module.exports = function (app) {
    app.post("/article/:id", function (req, res) {
        db.Article.create(req.body)
            .then(function (newArticle) {
                res.render("index", newArticle);
            });
    })
        .catch(err => res.json(err));
}