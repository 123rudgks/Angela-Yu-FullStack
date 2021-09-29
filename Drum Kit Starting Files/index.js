var numberOfDrums = document.querySelectorAll(".drum").length;

// 버튼 클릭했을 때
for (var i = 0; i < numberOfDrums; i++) { //이 부분에서 각 드럼 버튼을 클릭할 시 for문이 어떻게 도는지 궁금
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var clickedKey = this.innerHTML;
    makeSound(clickedKey);
    buttonAnimation(clickedKey);
  })
}

// 키보드 입력했을 때
document.addEventListener("keydown",function() {
  var pressedKey = event.key;
  makeSound(pressedKey);
  buttonAnimation(pressedKey);
})

// 이벤트 발생시 소리 만들어줄 때
function makeSound(key){

  switch(key){
    case 'w' :
    var audio_crash = new Audio("sounds/Fani-crash.mp3");
    audio_crash.play();
    break;

    case 'a' :
    var audio_tom1 = new Audio("sounds/Fani-tom1.mp3");
    audio_tom1.play();
    break;

    case 's' :
    var audio_tom2 = new Audio("sounds/Fani-tom2.mp3");
    audio_tom2.play();
    break;

    case 'd' :
    var audio_tom3 = new Audio("sounds/Fani-tom3.mp3");
    audio_tom3.play();
    break;

    case 'j' :
    var audio_tom4 = new Audio("sounds/Fani-tom4.mp3");
    audio_tom4.play();
    break;

    case 'k' :
    var audio_kick = new Audio("sounds/Fani-kick.mp3");
    audio_kick.play();
    break;

    case 'l' :
    var audio_snare = new Audio("sounds/Fani-snare.mp3");
    audio_snare.play();
    break;

    default:
    console.log(key);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  // 버튼 클릭시 해당 쿼리에 클래스 추가
  activeButton.classList.add("pressed");
  // 버튼 클릭 후 0.1초 이후에 클릭클래스 제거
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
