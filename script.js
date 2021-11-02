var random_number = generateRandomNumber(1, 3); //random number generated
console.log("Winning number is: " + random_number); //display in console the generated number

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayMessage(idBtnClicked) {
  //checks if the clicked button is the same with the random number
  if (random_number == idBtnClicked) {
    alert("Congratulations! You guessed right");
  } else {
    alert("You guessed wrong");
  }
}
