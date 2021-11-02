var random_number = generateRandomNumber(1, 3);
//console.log("Winning number is: " + random_number);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayMessage(idBtnClicked) {
  if (random_number == idBtnClicked) {
    alert("Congratulations! You guessed right");
  } else {
    alert("You guessed wrong");
  }
}
