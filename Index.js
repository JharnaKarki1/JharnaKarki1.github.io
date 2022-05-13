const { urlencoded } = require('express');
var express = require('express');
var app = express();
var questions=["3,1,4,1,5","1,1,2,3,5","1,4,9,16,25","2,3,5,7,11","1,2,4,8,16"];
var answers=[9,8,36,13,32];
let i=0;
let score=0;
const pug=require('pug');
//set view engine
app.set('view engine','pug')
app.use(express.urlencoded());
app.get('/', function (req, res) {
    if(i<5)
        res.render('sample',{score:score,question:questions[i]}); //sends HTML version of sample.pug to Browser
    else
        res.render('score',{points:score})
});

app.post("/checker",(req,res)=>{
    const userAnswer= parseInt(req.body.useranswer);
    const correctAns=parseInt(answers[i]);
    i++;
    // console.log(userAnswer);
    // console.log(correctAns);
    if(userAnswer==correctAns){
        score++;
    }
res.redirect("/");

});
app.listen(2000, ()=> {
    console.log('Node server is running..');
});