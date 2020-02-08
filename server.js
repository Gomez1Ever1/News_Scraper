const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
//setting up our app to extablish connections
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//Setting up handlebars
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

//calling our routes
require("./routes/scrapingRoutes.js")(app);
module.exports = app;