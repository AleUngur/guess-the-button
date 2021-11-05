document.getElementById("submitguess").onclick = function () {
  user_number = document.getElementById("guessField").value; //number guessed by user
  console.log("User's guess: " + user_number);
  var random_number = generateRandomNumber(1, user_number); //number generated randomly
  console.log("Winning number is: " + random_number);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

function createButtons() {
  for (var i = 1; i <= user_number; ++i) {}
}

function displayMessage(idBtnClicked) {
  if (random_number == idBtnClicked) {
    alert("Congratulations! You guessed right");
  } else {
    alert("You guessed wrong");
  }
}
