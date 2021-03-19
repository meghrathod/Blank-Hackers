const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const firstContents = ["About us", "Blog", "Dashboard", "Contact Us"];
const blogStart = "Welcome to our blog where we will regularly post carefully chose articles to help you improve your health and lifestyle."
const posts = [];

app.get("/", function (req, res) {
    res.render("home", {});
});
app.get("/about", function (req, res) {
    res.render("about");
});
const contact = [
    {
        Name: "Lakshman Aakash",
        EmailId: "la118@snu.edu.in",
        PhoneNo: "6301368909",
        photo: "images/imager.jpeg",
    },
    {
        Name: "Megh Rathod",
        EmailId: "mr867@snu.edu.in",
        PhoneNo: "9321582569",
        photo: "images/imager.jpeg",
    },
    { Name: "Prem", EmailId: "", PhoneNo: "", photo: "images/imager.jpeg" },
    {
        Name: "Raghav chaturvedi",
        EmailId: "rc166@snu.edu.in",
        PhoneNo: "9461494070",
        photo: "images/imager.jpg",
    },
];
app.get("/contact", function (req, res) {
    res.render("contact", { l1: contact });
});
app.get("/blog", function (req, res) {
    res.render("blog", { l1: blogStart, posts: posts });
});
app.get("/compose", function (req, res) {
    res.render("compose");
});
app.post("/blog", function (req, res) {
    res.redirect("/blog");
});
app.post("/compose", function (req, res) {
    const post = {
        title: req.body.composing,
        content: req.body.postBody,
    };
    posts.push(post);
    res.redirect("/");
});
app.get("/posts/:postName", function (req, res) {
    const requestedTitle = _.lowerCase(req.params.postName);
    for (let i = 0; i < posts.length; i++) {
        if (_.lowerCase(posts[i].title) === requestedTitle) {
            res.render("post", {
                posting: posts[i].title,
                compost: posts[i].content,
            });
        }
    }
});


app.get("/dashboard", function (req, res){
    res.render("dashboard")
})

app.listen(3000, function (req, res) {
    console.log("Listening on port 3000.");
});

