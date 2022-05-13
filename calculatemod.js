const express = require('express');
const app = express();
app.use(express.urlencoded());
app.get('/', (req, res, next)=>{
    console.log ("IN the middleware");
    res.sendfile(__dirname+'/calculator.html');
});
app.use('/output', (req, res, next) =>{
    var output;
    const a = parseInt(req. body.first);
    const b = parseInt(req.body.second);
    if (req.body.operation === 'add') {
        output = a+b;
    } else if (req.body.operation === 'subtract') {
        output = a-b;
    } else if (req.body.operation ==='multiple') {
        output = a*b;
    } else {
        output=a/b;
    }
    res.send(`<h1>The result is ${output} </hl>
            <form action='/' method='get'>
                <input type="submit" value = "Go Back">
            </form>
        `);
});
app.listen(8080,()=>{
    console.log('Your Server is running on 8080');
});