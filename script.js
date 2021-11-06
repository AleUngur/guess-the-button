document.getElementById("submitNumber").onclick = function () {
  var input_number = document.getElementById("numberField").value; //number of buttons to be created
  //console.log("User's number: " + input_number);
  var random_number = generateRandomNumber(1, input_number); //number generated randomly
  //console.log("Winning number is: " + random_number);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let container = document.getElementsByClassName("container")[0];

  function createButtons(n) {
    for (let i = 1; i <= n; ++i) {
      let button = document.createElement("button");
      button.className = "btn btn-success my-3 mx-1";
      button.innerHTML = i;
      button.type = "button";
      button.id = i;
      button.style = "width: 50px; height: 50px";
      container.appendChild(button);
    }
  }
  createButtons(input_number);

  function guessButton() {
    btns = document.getElementsByClassName("btn");
    for (var j = 0; j < btns.length; j++) {
      if (btns[j]) {
        btns[j].addEventListener("click", function () {
          if (random_number == event.target.id) {
            alert("Congratulations! You guessed right");
          } else {
            alert("You guessed wrong");
          }
        });
      }
    }
  }
  guessButton();

  function afterMessage() {
    let p = document.createElement("p");
    p.innerHTML =
      "If you want to try again please reload the page and enter a number";
    container.appendChild(p);
  }
  afterMessage();
};
