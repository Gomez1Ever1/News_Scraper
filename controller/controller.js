const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/", function (req, res) {
    db.Article.find({})
        .then(function (data) {
            const newData = convertProjectsToOwnObjects(data);
            res.render("index", { articles: newData });
            console.log("page loaded")
        })
});
function convertProjectsToOwnObjects(projects) {
    return projects.map(project => {
        return {
            headline: project.headline,
            link: project.link,
            art_img: project.art_img,
            summary: project.summary
        }
    });
}
// router.post("/api/article/:id", function (req, res) {

// })
module.exports = router;