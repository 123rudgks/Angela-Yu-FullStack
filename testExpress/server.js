const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile( __dirname+"/index.html");
});

app.get("/calculator",(req,res)=>{
    res.sendFile(__dirname+"/calculator.html");
});
app.post("/calculator", (req,res)=>{

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = Number(num1) + Number(num2);

    res.write(`<h1>RESULT : ${num1} + ${num2} = ${result}</h1>`);
    res.send();
})

app.listen(3000,()=>{
    console.log("3000 is fine");
});