const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
});
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
