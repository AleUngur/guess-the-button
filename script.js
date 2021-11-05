document.getElementById("submitNumber").onclick = function () {
  input_number = document.getElementById("numberField").value; //number guessed by user
  console.log("User's number: " + input_number);
  var random_number = generateRandomNumber(1, input_number); //number generated randomly
  console.log("Winning number is: " + random_number);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function createButtons() {
    for (var i = 1; i <= input_number; ++i) {
      var button = document.createElement("button");
    }
  }

  function displayMessage(idBtnClicked) {
    if (user_number == idBtnClicked) {
      alert("Congratulations! You guessed right");
    } else {
      alert("You guessed wrong");
    }
  }
};
