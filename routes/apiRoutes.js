const db = require("../models");
module.expoprts = function (app) {
    app.post("/article/:id", function (req, res) {
        db.Article.create(req.body)
            .then(function (newArticle) {

            });
    })
        .catch(err => res.json(err));
}