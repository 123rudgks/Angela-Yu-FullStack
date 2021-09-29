var randomNum1 = Math.floor( Math.random()*6 ) + 1 ;
var randomNum2 = Math.floor( Math.random()*6 ) + 1 ;

var randomImg1 = "./images/dice"+randomNum1+".png"
var randomImg2 = "./images/dice"+randomNum2+".png"

var imageDocument1 = document.querySelector(".img1");
var imageDocument2 = document.querySelector(".img2");

imageDocument1.setAttribute("src", randomImg1);
imageDocument2.setAttribute("src", randomImg2);

if(randomNum1>randomNum2){
  document.querySelector("h1").textContent = "🚩 Player1 win!!";
}
else if(randomNum1<randomNum2){
  document.querySelector("h1").textContent = "Player2 win!! 🚩";
}
else{
  document.querySelector("h1").textContent = "Draw..";
}
