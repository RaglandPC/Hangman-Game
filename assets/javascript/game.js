// choosing a radnom word
// create an array of words


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = [
  "Harry's",
  "Kelly's",
  "Tiki Cat",
  "Harpos"

];
var currentLetters = [];
var currentWord = "";
var blanks = 0;
var blanksAndSuccess = [];
var winCounter = 0;
var numGuesses = 7;
// array for gussed letters
var gussedLetter = [];
// array for crrect guesses
var correctLetter = [];
// guessed letters that are incorrect
var incorrectGuess = [];

document.onkeyup = function (event) {
  var alphabet = String.fromCharCode(event.which).toLocaleLowerCase();
  console.log(alphabet);

}

document.getElementById("start").onkeyup

function start() {
  numGuesses = 8;
  blanksAndSuccess = [];
  gussedLetter = [];
  incorrectGuess = [];
  // Selects a word at random
  currentWord = words[Math.floor(Math.random() * words.length)];
  currentLetters = currentWord.split("");
  //blanks
  blanks = currentLetters.length;
  for (var i = 0; i < blanks; i++) {
    blanksAndSuccess.push("-")
  }
  console.log(currentWord);
  document.getElementById("currentWord").innerHTML = "Find the missing letters:" + blanksAndSuccess.join(" ");
  document.getElementById("guessesRemaining").innerHTML = "Guesses left: " + numGuesses;
  document.getElementById("guessed").innerHTML = "Letters already gussed: "

}


function checkLetters(letter) {
  //using Boolean to check if the letter is in the word
  var letterInWord = false;
  //loop that goes through the length of the word
  for (var i = 0; i < blanks; i++) {
    if (currentWord[i] == letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var i = 0; i < blanks; i++) {

      if (currentWord[i] == letter) {
        blanksAndSuccess[i] = letter
      }
    }
    console.log(blanksAndSuccess);

  } else {
    incorrectGuess.push(letter);
    numGuesses--;
    console.log("that was incorrect " + numGuesses + " are remaining");
  }
}

//Upon finishing
function round() {
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guessesRemaining").innerHTML = "Number Of Guesses Remaining: " + numGuesses;
  document.getElementById("currentWord").innerHTML = "Find the missing letters: " + blanksAndSuccess.join(" ");
  document.getElementById("guessed").innerHTML = "Letters already guessed: " + incorrectGuess.join(" ");

  // IF we have gotten all the letters to match the solution...
  if (currentLetters.toString() == blanksAndSuccess.toString()) {
    winCounter++; // add to the win counter 
    document.getElementById("word").innerHTML = "The last word was " + currentWord;
    alert("You win! The word was " + currentWord); // give the user an alert   

    // Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = "You have won " + winCounter + " game(s)";
    startGame(); // restart the game 
  }

  // If we've run out of guesses
  else if (numGuesses == 0) {
    lossCounter++; // add to the loss counter 
    document.getElementById("word").innerHTML = "The last word was " + currentWord;

    alert("You lose. The word was " + currentWord); // give the user an alert

    // Update the loss counter in the HTML
    document.getElementById("lossCounter").innerHTML = "You have lost " + lossCounter + " game(s)";
    startGame(); // restart the game
  }
}

//Making the stuff run
//Calling the startGame function
startGame();