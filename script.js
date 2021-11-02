var random_number = Math.floor(Math.random() * 3); //random number generated
console.log("Winning number is: " + random_number); //display in console the generated number

function displayMessage(clicked_btn_id) {
  //checks if the clicked button is the same with the random number
  if (random_number == clicked_btn_id) {
    alert("You guessed right");
  } else {
    alert("You guessed wrong");
  }
}

//the interval of the random number is [0,3]
