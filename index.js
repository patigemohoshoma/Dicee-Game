//function to generate a random number
function randomNum() {

    var randomNumber = Math.floor((Math.random() * 6) + 1);

    return randomNumber;
}

//2 variables to store random numbers for both players
var myNum1 = randomNum();

var myNum2 = randomNum();

//storing the selected h1 in a variable called heading
var heading = document.querySelector("h1");

//conditions to change the h1 based on the random numbers generated
if (myNum1 > myNum2) {
    heading.innerHTML = "Player One Wins 🚩"
} else if (myNum2 > myNum1) {
     heading.innerHTML = "Player Two Wins 🚩"
} else {
    heading.innerHTML = "Draw"
}

//manipulating the images using the DOM based on the random number generated
document.querySelector(".img1").setAttribute("src", "./images/dice" + myNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + myNum2 + ".png");