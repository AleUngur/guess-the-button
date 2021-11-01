var random_number = Math.floor(Math.random() * 3); //random number generated
console.log("Numarul castigator este: " + random_number); //afisare numar random
var user_number = document.getElementsByClassName("btn").value; //valoarea butonului clickuit de user

document
  .getElementsByClassName("btn")
  .addEventListener("click", displayMessage); //actiunea de pe butonul clickuit

function displayMessage() {
  //functia de verificare daca numarul generat e egal cu cel de pe butonul ales
  if (random_number == user_number) {
    alert("You guessed right");
  } else {
    alert("You guessed wrong");
  }
}
