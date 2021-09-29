const express = require("express");


const app = express();
app.use(express.urlencoded({extended: true}));

const port = 3000;

app.get('/',(req,res)=>{
 res.sendFile(__dirname + "/index.html");
});

app.post('/',(req,res)=>{
    let num1= Number(req.body.num1);
    let num2= Number(req.body.num2);

    let result = num1 + num2;

    res.send("The result = "+result);
})

app.listen(port, ()=> {
    console.log("Port: 3000 server is running");
})