document.getElementById("submitNumber").onclick = function () {
  input_number = document.getElementById("numberField").value; //number of buttons to be created
  console.log("User's number: " + input_number);
  var random_number = generateRandomNumber(1, input_number); //number generated randomly
  console.log("Winning number is: " + random_number);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  createButtons(input_number);

  function createButtons(x) {
    for (var i = 1; i <= x; ++i) {
      var btn = document.createElement(
        `<button type="button" class="btn btn-outline-success" style="width: 50px; height: 50px"></button>`
      );
      var body = document.getElementsByClassName("container")[i];
      body.appendChild(button);
    }
  }

  function displayMessage(idBtnClicked) {
    if (random_number == idBtnClicked) {
      alert("Congratulations! You guessed right");
    } else {
      alert("You guessed wrong");
    }
  }
};
