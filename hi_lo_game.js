// Function that returns a random integer between min (included) and max (included)
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Declares a variable for which attempt the user is on. Begins at 1 (first attempt).
var userAttempts = 1

// Begin hiLoGame function.
function hiLoGame() {
  var userName = prompt("What is your name?")
  // Computer establishes a random number between 1 and 100 inclusive. Assigns the value to var randomNumber
  var randomNumber = getRandomIntInclusive(1,100);
  // alert("The random number is " + randomNumber);
  // alert("The random number is " + randomNumber);
  // Declares var for user's guess. Prompts for user input.
  var userGuess = prompt("Pick a number between 1 and 100 (inclusive).");

// Begin while loop, limits the number of user attempts to 7.
while (userAttempts <= 7) {

  // If user provides a guess that is not comprised of integers, execute the following:
  if (parseInt(userGuess,10) != userGuess) {
    alert("You can only use numbers.");
    userAttempts = userAttempts + 1;
    var userGuess = prompt("Pick again - a number between 1 and 100 (inclusive).");
  }

  // If user's guess is higher than computer's choice, then exectuve following:
  if (userGuess > randomNumber) {
      // Alerts user that their number is too high.
      alert("Your number is too high.");
      userAttempts = userAttempts + 1;
      // Changes value of userGuess var. Prompts user to pick again and provide new input.
      var userGuess = prompt("Pick again - a number between 1 and 100 (inclusive).");
  }

  // If user's guess is lower than computer's choice, then execute the following:
  if (userGuess < randomNumber) {
      // Alerts user that their number is too low.
      alert("Your number is too low.");
      userAttempts = userAttempts + 1;
      // Changes value of userGuess var. Prompts user to pick again and provide new input.
      var userGuess = prompt("Pick again - a number between 1 and 100 (inclusive).");
  }

  // If user's guess is correct, execute the following:
  if (userGuess == randomNumber) {
    // Alerts user that they guessed correctly!
    alert("You guessed correctly, " +userName +"!");
    userAttempts = userAttempts + 7;
  }
// End while bracket.
}
// // Alerts us of computer's choice for random number.
alert("The random number is " + randomNumber);
// // End function bracket.
}

// Calls function hiLoGame to begin.
hiLoGame();
