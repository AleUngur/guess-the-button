document.getElementById("submitNumber").onclick = function () {
  var input_number = document.getElementById("numberField").value; //number of buttons to be created
  console.log("User's number: " + input_number);
  var random_number = generateRandomNumber(1, input_number); //number generated randomly
  console.log("Winning number is: " + random_number);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let i = 1;
  let container = document.getElementsByClassName("container")[0];

  function createButtons(n) {
    for (i = 1; i <= n; ++i) {
      let button = document.createElement("button");
      button.className = "btn btn-success my-3 mx-1";
      button.innerHTML = i;
      button.type = "button";
      button.id = i;
      button.style = "width: 50px; height: 50px";
      //button.onclick = displayMessage(this.id);
      container.appendChild(button);
    }
  }
  createButtons(input_number);
};

function displayMessage(idBtnClicked) {
  if (random_number == idBtnClicked) {
    alert("Congratulations! You guessed right");
  } else {
    alert("You guessed wrong");
  }
}
