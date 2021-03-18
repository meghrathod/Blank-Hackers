const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const firstContents = ['about-us', 'blog', 'dashboard'];

app.get("/", function (req, res) {
    res.render("home", {
    });
});

app.listen(3000, function (req, res){
    console.log("Listening on port 3000.")
})