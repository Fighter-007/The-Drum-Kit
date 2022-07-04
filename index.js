//Detecting the button
var tap = document.querySelectorAll("button.drum");
console.log(tap[0].innerHTML);
for (i = 0; i < tap.length; ++i) {
  tap[i].addEventListener("click", function () {
    drumPlay(this.innerHTML); //this=tap[i]
    flash(this.innerHTML);
  });
}

//Detecting the Key
document.addEventListener("keydown", function (event) {
  drumPlay(event.key);
  flash(event.key);
});

//Performance
function drumPlay(k) {
  switch (k) {
    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case "s":
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case "d":
      var audio = new Audio("sounds/tom-3.mp3");
      break;
    case "f":
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      break;
    case "k":
      var audio = new Audio("sounds/snare.mp3");
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log(keyName);
  }
  audio.play();
}

//Flash: Adding Animation
function flash(k) {
  document.querySelector("." + k).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + k).classList.remove("pressed");
  }, 100);
}
