const express = require("express");
const request = require("request");
const client = require("@mailchimp/mailchimp_marketing");
const app = express();

client.setConfig({apiKey: "89d1b964a214f3c605",  server: "us-5",});
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
});

app.post('/signup', (req,res)=>{
    const subscribingUser = {firstName: firstName, lastName: lastName, email: email}
    let fName = req.body.firstName;
    let sName = req.body.secondName;
    let email = req.body.email;

    console.log(`welcome, ${fName} ${sName} your email is "${email}"`);
    res.send(`welcome, ${fName} ${sName} your email is "${email}"`);
})
app.listen(3000,()=>{
    console.log("port 3000 is running");
})

// 89d1b964a214f3c605