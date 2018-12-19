// Word Guess Game with 80s bands
window.onload = function() {

  var answers = [
    { name: "genesis", time: "80s", pic: "https://picsum.photos/500/500", quote: "Invisible Touch", obscura: "Peter Gabriel was once our lead singer"},
    { name: "madonna", time: "80s", pic: "https://picsum.photos/500/500", quote: "Like a Virgin",  obscura: "My real name is Madonna Louise Ciccone"},
    { name: "prince", time: "80s", pic: "https://picsum.photos/500/500", quote: "Darling Nikki",  obscura: "My real name is Prince Rogers Nelson"},
    { name: "the police", time: "80s", pic: "https://picsum.photos/500/500", quote: "Don't Stand So Close To Me",  obscura: "Lead singer left band becuase he was bored of pop music"},
    { name: "bruce springsteen", time: "80s", pic: "https://picsum.photos/500/500", quote: "The Boss",  obscura: "Brought Courtney Cox on stage to dance in video"},
    { name: "def leppard", time: "80s", pic: "https://picsum.photos/500/500", quote: "Pour some sugar on me",  obscura: "One armed drummer"},
    { name: "billy joel", time: "80s", pic: "https://picsum.photos/500/500", quote: "Sing us a song you're the piano man",  obscura: ""},
    { name: "toto", time: "80s", pic: "https://picsum.photos/500/500", quote: "I bless the rains down in Africa",  obscura: "Pop band from LA"},
    { name: "rush", time: "80s", pic: "https://picsum.photos/500/500", quote: "Little Red Barchetta",  obscura: "Canadian prog rock"},
    { name: "nirvana", time: "90s", pic: "https://picsum.photos/500/500", quote: "Smells Like Teen Spirit",  obscura: "Seattle grunge rock"},
    { name: "red hot chili peppers", time: "90s", pic: "https://picsum.photos/500/500", quote: "Californication",  obscura: "something"},
    { name: "smashing pumpkins", time: "90s", pic: "https://picsum.photos/500/500", quote: "Cherub Rock",  obscura: "something"},
    { name: "george frideric handel", time: "Baroque", pic: "https://picsum.photos/500/500", quote: "Messiah",  obscura: ""},
    { name: "Johann sebastian bach", time: "Baroque", pic: "https://picsum.photos/500/500", quote: "Mass in B Minor",  obscura: ""},
    { name: "antonio vivaldi", time: "Baroque", pic: "https://picsum.photos/500/500", quote: "The Four Seasons",  obscura: ""},
    { name: "johann pachelbel", time: "Baroque", pic: "https://picsum.photos/500/500", quote: "Canon in D",  obscura: ""},
    { name: "louis armstrong", time: "Jazz", pic: "https://picsum.photos/500/500", quote: "",  obscura: "Nickname: Satchmo"},
    { name: "duke ellington", time: "Jazz", pic: "https://picsum.photos/500/500", quote: "",  obscura: "Started at the Cotton Club in Harlem"},
    { name: "thelonious monk", time: "Jazz", pic: "https://picsum.photos/500/500", quote: "",  obscura: "From Rocky Mount, North Carolina"},
    { name: "dizzy gillespie", time: "Jazz", pic: "https://picsum.photos/500/500", quote: "",  obscura: "Influenced trupeters like Miles Davis"},
    { name: "charlie parker", time: "Jazz", pic: "https://picsum.photos/500/500", quote: "",  obscura: ""},
  ];
 

//var bandNames = ["genesis", "aerosmith", "blondie", "prince", "madonna", "bon jovi", "baltimora",  "toto", "rush"];
//var max = bandNames.length; // for array version
var bandNameArray = [];
var wins = 0;
var losses = 0;
var max = answers.length;
var guesses = [];
var guessesAllowed = 10;
var displayArray = []; //Two dimensional array to keep current answer along with the empty spaces representing the unguessed word(s)
var unguessedAnswer = [];
var guessedLetters = [];
var gameWin = false;
var underscoreCounter = 0;

document.addEventListener('keypress', guess);
//document.getElementById('guesses').innerHTML = guessesAllowed;
document.getElementById("wins").innerHTML = wins;
document.getElementById("remaining").innerHTML = guessesAllowed;

// get random number
function getRandomInt(min, max) {  
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var randomBandNum = getRandomInt(0, max);
console.log(answers[randomBandNum].name.split(""));
 
//Take the randomly generated band name and push into its own array
for(var i = 0; i < answers[randomBandNum].name.length; i++) {
  bandNameArray.push(answers[randomBandNum].name[i]);
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

// function helpers() {
//   if(document.getElementById('quotes').checked) {
//     document.getElementById('quotes').innerHTML = answers[0].quote;
//   }
// }


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
        //screenDisplay = displayArray.toUpperCase;
       document.getElementById("answer").innerHTML = displayArray.join(" ");
      }
    }
   

    // try replacing this with a loop that checks the value of each of these arrays
    console.log(displayArray + " - " + bandNameArray);
    if (displayArray === bandNameArray) {//(underscoreCounter == 0) {
      gameWin = true;
      console.log(gameWin+ "game win");
    }
    

    guessedLetters.push(input);
    document.getElementById("guessed").innerHTML = guessedLetters;
  
  } else { // an incorrect guess
      guessedLetters.push(input);
      document.getElementById("guessed").innerHTML = guessedLetters;
    }
    // reduce turn by 1
    guessesAllowed = guessesAllowed - 1;
    document.getElementById("remaining").innerHTML = guessesAllowed;

    /////// Add hints at new levels of guessing
    if(guessesAllowed <= 9) {
      if(document.getElementById('genre').checked) {
        document.getElementById("hint2").innerHTML = answers[randomBandNum].time;
      }
      if(document.getElementById('obscura').checked) {
        document.getElementById("hint5").innerHTML = answers[randomBandNum].obscura;
      }
    }
    if(guessesAllowed <= 5) {
      if(document.getElementById('quotes').checked) {
        document.getElementById("hint1").innerHTML = answers[randomBandNum].quote;
      }
    }
    if(guessesAllowed <= 3) {
      if(document.getElementById('pictures').checked) {
        document.getElementById("hint3").innerHTML = answers[randomBandNum].pic;
      }
    }


    if(guessesAllowed == 0) {
      gameWin = false;
      alert("Game Over!  Hit refresh to try again.");
    }
    if (gameWin) {
      win = win + 1;
      document.getElementById("wins").innerHTML = wins;
      alert("congrats you won!");
    }
  }
}
