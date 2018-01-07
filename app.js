var express = require("express");
var app = express();

app.get('/', function(req, res, next){
    res.send("You got a working Express server!");
});

app.listen(3000, function(){
    console.log("Template Express listeing from port 3000");
});
