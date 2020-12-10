var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/search", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var qData = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + qData + "&apikey=ead6ac2b";
        request(url, function(error, response, body){
            if(!error && response.statusCode ==200){
                var parsedData = JSON.parse(body);
                res.render("results", {data: parsedData});
            } else {
                res.send("404 NotFound");
            }
        });
    });

app.listen("3000" , function(){
    console.log("MovieHub is Connected")
});