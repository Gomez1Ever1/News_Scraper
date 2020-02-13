//Cheerio and AXIOS to scrape and to store the data into my mongo db
const cheerio = require("cheerio");
const axios = require("axios");
const db = require("../models");
module.exports = function (app) {
    app.get("/scrape", function (req, res) {
        axios.get("https://thehardtimes.net/").then(function (response) {
            const $ = cheerio.load(response.data);
            $("div[id=overflow-container]").children("div[id=max-width]").children("div[class=content-container]").children("div[class=layout-container]")
                .children("section[id=main]").children("div[id=loop-container]").children("div").each(function (i, element) {
                    console.log(i)
                    var result = {};
                    result.headline = $(this)
                        .children("article")
                        .children("div[class=post-header]")
                        .children("h2")
                        .children("a")
                        .text();
                    result.link = $(this)
                        .children("article")
                        .children("div[class=post-header]")
                        .children("h2")
                        .children("a")
                        .attr("href");
                    result.art_img = $(this)
                        .children("article")
                        .children("div[class=featured-image]")
                        .children("img")
                        .attr("src");
                    result.summary = $(this)
                        .children("article")
                        .children("div[class=post-content]")
                        .children("p")
                        .text();
                    db.Article.create(result)
                        .then(dbArticle => console.log(dbArticle))
                        .catch(err => console.log(err))
                });
            res.send("scrape complete");
        });
    });
};