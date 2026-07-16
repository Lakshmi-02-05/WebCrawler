const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", function (req, res) {
    res.send("SEO Web Crawler Backend Running!");
});

app.post("/crawl", function (req, res) {

    console.log(req.body);

    res.send("URL received!");

});

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});