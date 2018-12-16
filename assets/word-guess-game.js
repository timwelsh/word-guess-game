// Word Guess Game with 80s bands

var bandNames = ["GENESIS", "AEROSMITH", "BLONDIE", "REM", "U2", "SPRINGSTEEN", "PRINCE", "MADONNA", "BONJOVI", "BALTIMORA", 
  "BANANARAMA", "HEART", "EURYTHMICS", "FOREIGNER", "INXS","STING","STYX","KISS","DIO","UB40","EUROPE"];
var bandNameArray = [];
var max = bandNames.length;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var randomBandNum = getRandomInt(1, max) - 1;
//console.log(randomBandNum + " a random index num for band " + bandNames[randomBandNum]);
console.log(bandNames[randomBandNum].split(""));
 
for(var i = 0; i < bandNames[randomBandNum].length; i++) {
  bandNameArray.push(bandNames[randomBandNum][i]);
  document.write(bandNameArray[i] + "__");
}
console.log(bandNameArray + " this is band name array ");

//
document.onkeyup = function(event) {
  // console.log("key pressed " + event.key);
  var keyPressed = event.key.toUpperCase();  // this will convert to lower case so 
  if(event.key === bandNameArray[0]) {
    document.write(" this is the first letter of the band ")
  }
}

