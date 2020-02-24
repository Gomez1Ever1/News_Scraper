const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
//setting up our app to extablish connections
const PORT = 3000;
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
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect((MONGODB_URI), { useUnifiedTopology: true, useNewUrlParser: true });

//calling our routes
require("./routes/scrapingRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
const routes = require("./controller/controller.js")
require("./routes/apiRoutes.js")(app);
// Start the server
app.use(routes);
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
module.exports = app;