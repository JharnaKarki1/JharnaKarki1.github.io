var express = require("express");
var mysql= require('mysql');
var word = require('./word');
const path = require("path");

const config = require("./connection");

var app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname)));

function checkConnection(){
    var databaseConnection= mysql.createConnection(config);
    databaseConnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
}

var con=checkConnection();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "dict.html"));
})


app.post('/search', function (req, res) {
     var w = req.body.word;
    console.log(w);
    word.searchWord(con, w, function(err, result){
        console.log(result);
        res.send(result);
    });
});

app.listen(8080, function () {
    console.log("Node Server is running on port 8080")
});
