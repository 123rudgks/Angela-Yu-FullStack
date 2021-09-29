//jshiny esversion:6

const mongoose = require('mongoose');

// coonect + create db
mongoose.connect('mongodb://localhost:27017/fruitsDB');

//create new Schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// create Schema
const fruitSchema = new Schema({
    author: ObjectId,
    name: {
        type: String,
        required:[true,"where is the name of the fruit?"]
    },
    rating: {
        type: Number,
        min: [1,"the minimum rate is 1"],
        max: 10,
    },
    review: String
});

// collection drop 하는 법
// const peoplesSchema = new Schema({});
// const Peoples = mongoose.model("People",peoplesSchema);
// Peoples.collection.drop();

// create model , Fruit(단수)로 넣어도 알아서 복수형으로 찾음
const Fruit = mongoose.model("Fruit", fruitSchema);

// // 기존에 있는 DB 불러오는 법
// // 1. 기존 DB의 스키마를 그대로 정의
// const peopleSchema = new Schema({_id:ObjectId,name:String,age:Number,gender:String});
// // 2. 정의된 스키마에 기존 collection을 붙혀서 새로운 model 생성
// // model docs 확인하기
// const People = mongoose.model("People",peopleSchema,"people");

// People.deleteMany({name:/J/},function(err){
//     if(err){
//         console.log("errpr");
//     }
// });

// object 생성
// const apple = new Fruit({
//     name:"watermelon",

//     rating: 0,
//     review:"watermelone sugar"
// });
// Insert data
// apple.save();

// const banana = new Fruit({
//     name:"Banana",
//     rating:5,
//     review:"I don't like its texture"
// });
// const orange = new Fruit({
//     name:"Orange",
//     rating:8,
//     review:"it's quite sweet"
// });
// const peach = new Fruit({
//     name:"Peach",
//     rating:7,
//     review:"I prefer soft peach than hard one"
// });
// Fruit.insertMany([banana,orange,peach],(err)=>{
//     if(err) console.log("error has occured");
//     console.log("the fruits succeded in being inserted into fruitsDB");
// });

// Find data
// Fruit.find(function(err,fruits){
    
//     if(err){
//         console.log(err);
//     }else{
//         //mongoose.connection.close();
//         //console.log(fruits);
//         fruits.map((fruit)=>{console.log(fruit["name"])});
//     }
// });

// Update data
// Fruit.updateOne({_id:"6143fa20d7bdca550921bceb"},{name:"Watermelon"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("success to update the data");
//     }
// });

// Fruit.deleteOne({_id:"6143f9fdb28299dc51fd0485"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("delete success");
//     }
// });

// Fruit.deleteMany({name:"Watermelon"},(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("deleteMany success");
//     }
// });

const grape = new Fruit({
    name:"Grape",
    rating:4,
    review:"too sour"
});
grape.save();

const peopleSchema = new Schema({name:String,age:Number,favourite:fruitSchema});
const People = mongoose.model("People",peopleSchema,"people");
const John = new People({
    name:"John",
    age:37
});

People.updateOne({name:"John"},{favourite:grape},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("update success");
    }
})

 
