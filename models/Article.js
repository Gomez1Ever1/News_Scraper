const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    headline: {
        type: String
    },
    link: {
        type: String
    },
    art_img: {
        type: String
    },
    summary: {
        type: String
    }
});
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
