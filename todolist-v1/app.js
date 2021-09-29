const express = require("express");
const date = require(__dirname+"/date.js");


const app = express();
// express view engine에 ejs를 set 해줌
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static("public"));



const homeItem = [];
const workItem = [];

// route: "/" 인 get, post 메소드
app.get("/", function (req, res) {

    let currentday = date.getDay();
    let day = "";
    if (currentday === 1) {
        day = "Monday";
    } else if (currentday === 2) {
        day = "Tuesday";
    } else if (currentday === 3) {
        day = "Wednsday";
    } else if (currentday === 4) {
        day = "Thursday";
    } else if (currentday === 5) {
        day = "Friday";
    } else if (currentday === 6) {
        day = "Saturday";
    } else if (currentday === 0) {
        day = "Sunday";
    } else {
        day = "error";
    }

    let fulldate = date.getDate();
    // views폴더(default)안에 list.ejs에다가 render해줌
    // ejs를 쓰는 이유, 만약 html로 했다면 해당 케이스당 일일이 html파일 만들어서 sendFile 해주었어야 함
    res.render('list', {
        listTitle: day,
        kindOfFullDate: fulldate,
        itemArr: homeItem,
    });
});


app.post("/", (req, res) => {
    const item = req.body.addItem;
    
    if(req.body.list === "Work"){
        workItem.push(item);
        res.redirect("/work");
    } else{
        homeItem.push(item);
        res.redirect("/");
    }
});

// route: "/work" 인 get, post 메소드
app.get("/work", (req, res) => {

    let fulldate = date.getDate();

    res.render("list", {
        listTitle: "Work",
        kindOfFullDate: '',
        itemArr: workItem,
    });
});


// route: "/about" 인 get, post 메소드
app.get("/about", (req,res)=>{
    let fulldate = date.getDate();
    res.render("about");
})


app.listen(3000, () => {
    console.log(`port 3000 is running well`);
});