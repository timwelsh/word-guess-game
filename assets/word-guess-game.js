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

function getRandomInt(min, max) {  // get random number
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var randomBandNum = getRandomInt(0, max);
//console.log(randomBandNum + " a random index num for band " + bandNames[randomBandNum]);
console.log(bandNames[randomBandNum].split(""));
 
for(var i = 0; i < bandNames[randomBandNum].length; i++) {
  bandNameArray.push(bandNames[randomBandNum][i]);
}
//console.log(bandNameArray + " this is band name array ");
for(var i = 0; i < bandNameArray.length; i++) { //Build displayArray to keep two dimensions of correct answer and unguessed spaces.
  if(bandNameArray[i] === " ") {
    combine = [" "];
    displayArray.push(combine);
  } else {
    combine = ["_"];
    displayArray.push(combine);
  }
}
document.getElementById("answer").innerHTML = displayArray.join(" ");
// for(var i = 0; i < displayArray.length; i++) {
//   unguessedAnswer = unguessedAnswer + displayArray[i][1];
// }
function guess() {
  input = event.key;
  if(guessedLetters.includes(input)) {
    alert("You have already guessed this letter! ");
  }
  if(bandNameArray.includes(input)) {
    //document.getElementById("guessed").innerHTML = guessedLetters;
    //document.getElementById("answer").innerHTML = input.toUpperCase();
    for (var i = 0; i < bandNameArray.length; i++) {
      if (input == bandNameArray[i]) {
        displayArray[i] = input;
        screenDisplay = displayArray;
       document.getElementById("answer").innerHTML = screenDisplay.join(" ");
      }
    }
    var underscoreCounter = 0;
    for (var i = 0; i < screenDisplay.length; i++) {
      if(screenDisplay[i] === "_") {
        underscoreCounter = underscoreCounter + 1;
      }
      if (underscoreCounter === 0) {
        gameWon = true;
      }
    }
    guessedLetters.push(input);
    document.getElementById("guessed").innerHTML = guessedLetters;
  } else {
      guessedLetters.push(input);
      document.getElementById("guessed").innerHTML = guessedLetters;
    }
  }
  //console.log(gameWon + " game won?");
  //console.log(bandNameArray + " this is band name array ");
  
  if (gameWon) {
    win = win + 1;
    document.getElementById("wins").innerHTML = wins;
    alert("congrats you won!");
  }


}
//document.getElementById("displayArray").innerHTML = displayArray.join(" ");
