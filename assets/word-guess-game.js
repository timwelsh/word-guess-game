// Word Guess Game with 80s bands
window.onload = function() {

var bandNames = ["genesis", "aerosmith", "blondie", "prince", "madonna", "bon jovi", "baltimora",  "toto", "rush"];
var bandNameArray = [];
var wins = 0;
var losses = 0;
var max = bandNames.length;
var guesses = [];
var guessesAllowed = 10;
var displayArray = []; //Two dimensional array to keep current answer along with the empty spaces representing the unguessed word(s)
var unguessedAnswer = [];
var guessedLetters = [];
var gameWon = false;
var underscoreCounter = 0;

document.addEventListener('keypress', guess);
//document.getElementById('guesses').innerHTML = guessesAllowed;
document.getElementById("wins").innerHTML = wins;

// get random number
function getRandomInt(min, max) {  
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var randomBandNum = getRandomInt(0, max);
console.log(bandNames[randomBandNum].split(""));
 
//Take the randomly generated band name and push into its own array
for(var i = 0; i < bandNames[randomBandNum].length; i++) {
  bandNameArray.push(bandNames[randomBandNum][i]);
}

//Build displayArray to keep unguessed spaces
for(var i = 0; i < bandNameArray.length; i++) { 
  if(bandNameArray[i] === " ") {
    combine = [" "];
    displayArray.push(combine);
  } else {
    combine = ["_"];
    displayArray.push(combine);
  }
}
document.getElementById("answer").innerHTML = displayArray.join(" ");

//function to keep logic for when a user guesses a letter
function guess() {
  input = event.key;
  if(guessedLetters.includes(input)) {
    alert("You have already guessed this letter! ");
  }
  if(bandNameArray.includes(input)) {  // a correct guess
    for (var i = 0; i < bandNameArray.length; i++) {
      if (input == bandNameArray[i]) {
        displayArray[i] = input;
        screenDisplay = displayArray;
       document.getElementById("answer").innerHTML = screenDisplay.join(" ");
      }
    }
    var underscoreCounter = 0;
    console.log(screenDisplay[1] + " screen display ")
    for (var i = 0; i < screenDisplay.length; i++) {
      if(screenDisplay[i] == "_") {
        underscoreCounter = underscoreCounter + 1;
        console.log(underscoreCounter + " underscore counter ")
      }
      if (underscoreCounter == 0) {
        var gameWon = true;
      }
      console.log(underscoreCounter + " underscore counter 2  and game won " + gameWon)
    }
    guessedLetters.push(input);
    document.getElementById("guessed").innerHTML = guessedLetters;
  
  } else { // an incorrect guess
      guessedLetters.push(input);
      document.getElementById("guessed").innerHTML = guessedLetters;
    }
  }
  
  if (gameWon) {
    win = win + 1;
    document.getElementById("wins").innerHTML = wins;
    alert("congrats you won!");
  }
}
