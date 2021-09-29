const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extend: true
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    console.log("Post Recived");
    
    const query = req.body.cityName;
    const apiKey = "e97cb2b214947a9ea6841c25bb172e58";
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + query + "&units=" + units;
    
    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
            //console.log(data);
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const weatherDataToString = JSON.stringify(weatherData);
            console.log(weatherDataToString);
            // API 필드들
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const minTemp = weatherData.main.temp_min;
            const maxTemp = weatherData.main.temp_max;
            const icon = weatherData.weather[0].icon;


            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";


            console.log("temperature : " + temperature + " C");
            console.log(description);
            console.log("minimum temperature : " + minTemp + " C, " + "maximum temperature : " + maxTemp + " C");

            res.write("<head><meta charset=\"utf-8\"></head>");
            res.write("<span style=\"color:pink; background-color: gray;\">Today, the Weather is " + description + " Honey ^^</span>");
            res.write("<img src=" + iconUrl + ">");
            res.write("<h1>The temperature in "+query+" is " + temperature + "`C</h1>");
            res.send();
            // send는 끝을 의미. 한번에 하나 밖에 사용 못함
            // res.send("Server is up and running");
        })
    });
    // send는 끝을 의미. 한번에 하나 밖에 사용 못함
    // res.send("Server is up and running");
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});