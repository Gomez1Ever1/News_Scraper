//Express to connect to routes
const express = require("express");
const app = express();
//Cheerio and AXIOS to scrape and to store the data into my mongo db

const cheerio = require("cheerio");
const axios = require("axios");
const db = require("./models");
module.exports = function (app) {
    app.get("/scrape", function (req, res) {

    })
};