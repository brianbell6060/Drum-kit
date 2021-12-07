var numberOfButtons = document.querySelectorAll(".drum").length

for (var i = 0; i<numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}
  document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
  });


function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;
    default: console.log(this.innerHTML)

    var storage = []
  }

}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
// var beanPic = document.querySelector(".beans")
// var jaclyn = document.querySelector(".jaclyn");
//
// jaclyn.addEventListener("click", function() {
//   var yay = new Audio("sounds/bDay.mp3")
//   yay.play()
//
//   jaclyn.innerHTML = "<img class='beans'src='http://images7.memedroid.com/images/UPLOADED324/5c748426518ab.jpeg'>You found the secret beans!"
//
//   // setTimeout(function () {
//   //   beanPic.classList.remove("hidden");
//   // }, 100);
//
// });
//
// document.addEventListener("click" function(event) {
//
//   if (event.path !== "[button.jaclyn, div.set, body, html, document, Window]") {
//   jaclyn.innerHTML - "Secret Button";
//   beanPic.classList.add("hidden");
// }
// });
//
//
// function unJaclyn(typeOfClick, event) {
//
// }

var beanPic = document.querySelector(".beans");
var jaclyn = document.querySelector(".jaclyn");

  // setTimeout(function () {
  //   beanPic.classList.remove("hidden");
  // }, 100);

// });

document.addEventListener("click", function(event) {
  var destination = document.querySelector(".jaclyn");  // the target I'm focusing when clicked
  var path = event.target;  //the target of what is clicked
  console.log("Im right before the if statement");
  if (path === destination) { //when what i want focused has the same location as what was clicked this function will be called.
    jaclyn.innerHTML = ""
    var yay = new Audio("sounds/bDay.mp3");
    yay.play()
    setTimeout(function(){
      jaclyn.innerHTML = "<img class='beans'src='http://images7.memedroid.com/images/UPLOADED324/5c748426518ab.jpeg'><br><br>You found the secret beans!";
      jaclyn.classList.add("found")
    }, 3000)
} else {
  jaclyn.innerHTML = "Secret Button!";
  beanPic.classList.add("hidden");
  jaclyn.classList.remove("found")
}
});
