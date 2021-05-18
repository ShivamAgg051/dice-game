function randomGenerator() {
  var random = Math.floor(Math.random() * 6) + 1;
  return random;
}

var randomNumber1 = randomGenerator();

var randomNumber2 = randomGenerator();

var image1 = "images/dice" + randomNumber1 + ".png";

var image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);

document.querySelector(".img2").setAttribute("src", image2);

function result(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    var msg = "🚩 player1 wins!";
  } else if (randomNumber1 === randomNumber2) {
    var msg = "Draw!!";
  } else {
    var msg = "player2 wins! 🚩";
  }
  return msg;
}

document.querySelector("h1").innerHTML = result(randomNumber1, randomNumber2);
