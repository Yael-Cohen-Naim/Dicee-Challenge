var randomNumber1 = Math.floor(6 * Math.random()) + 1; //1-6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1); // changing img1 dice image

var randomNumber2 = Math.floor(6 * Math.random()) + 1; //1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2); // changing img2 dice image

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
//If player 2 wins    
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//If a draw
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
