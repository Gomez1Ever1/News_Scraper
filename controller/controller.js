const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/", function (req, res) {
    db.Article.find({})
        .then(function (data) {
            const newData = convertProjectsToOwnObjects(data);
            console.log(data);
            res.render("index", { articles: newData });
            console.log("page loaded")
        });
});
function convertProjectsToOwnObjects(projects) {
    return projects.map(project => {
        return {
            headline: project.headline,
            link: project.link,
            art_img: project.art_img,
            summary: project.summary,
            id: project._id
        }
    });
}
router.get("/viewSaved", function (req, res) {
    db.savedArticle.find({})
        .then(function (data) {
            const savedData = convertProjectsToOwnObjects(data);
            console.log(data);
            res.render("index", { articles: savedData });
            console.log("page loaded")
        });
})
// router.post("/api/article/:id", function (req, res) {

// })
module.exports = router;