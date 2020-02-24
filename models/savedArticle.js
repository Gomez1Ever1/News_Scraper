const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const savedArticleSchema = new Schema({
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
const savedArticle = mongoose.model("savedArticle", savedArticleSchema);
module.exports = savedArticle;