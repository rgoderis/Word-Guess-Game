// create variable to store my values. Wins, userGuess, computerChoices 
var wins = 0;
var guessLeft = 12;
var guessSoFar = [];
var userGuess;
var hangmanWord;
var blankWord = [];
var dashedWord = ''

// Star Wars Character
// switch to an array
var computerChoices = ["chewbacca",
"darthvader",
"lukeskywalker",
"hansolo",
"C3PO",
"R2D2"]

// create function to display the results to page DOM
function updateDisplay(){
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#guess-left").innerHTML = guessLeft;
    document.querySelector("#guess-so-far").innerHTML = guessSoFar;
    document.querySelector("#hangman-word").innerHTML = hangmanWordText;
}

// create function for computer to grab random word from array
function computerRandomWord(){
    // create function that will display blank word that is length of hangman word
    hangmanWord = computerChoices[Math.floor(Math.random() * computerChoices.length)].toLowerCase();  
}

// create function to reset scores
function reset(){
    guessLeft = 12;
    guessSoFar = [];
    blankWord = [];
    dashedWord = ''
}

// calling function for computer to grab a random word from the computer choices array
computerRandomWord();
newBlankWord();

// pushes _ for each letter in the hangmanWord
function newBlankWord(){
    for(var i = 0; i < hangmanWord.length; i++){
        blankWord.push("_");
        dashedWord = blankWord.join(" ")
    }
}


// sets the dashed word the text that should display in the html as the hangman word
hangmanWordText = dashedWord

// updating the display after choosing a random word and displaying it as dashes
updateDisplay();

// create a onkeyup envent function to grab userGuess
document.onkeyup = function(event){
    userGuess = event.key
// cycle through hangmanWord
    for(var i = 0; i < hangmanWord.length; i++){
        // check to see if the user guess is a character in the hangman word
        if(userGuess === hangmanWord.charAt(i)){
            // sets the user guess at the index it appears in 
            blankWord[i] = userGuess
            console.log(blankWord[i])
            // updates dashedWord array with user guess
            dashedWord = blankWord.join(" ")
            // updates the hangman word to display as the dashed array text
            hangmanWordText = dashedWord;
            // updates DOM display
            updateDisplay()
            console.log("you guessed right!!!")


        }

        // check to see if there are no more "-" in dashedWord, if so then win var goes up 1 and game resets
        if (dashedWord.indexOf('_') == -1 ){ // if there are no dashes left
            console.log("there are no more _")
            //win!
            wins++;
            computerRandomWord();
            reset();
            newBlankWord()
            hangmanWordText = dashedWord;
            updateDisplay();
        } else if (guessLeft === 0){
            computerRandomWord();
            reset();
            newBlankWord()
            hangmanWordText = dashedWord;
            updateDisplay();
            }
    }

}
// need guess var to decrease each time a user guesses incorrectly and push userGuess into guessSoFar
            // guessLeft isn't firing properly since it is in the for loop 
            // and decreases for each guess that doesn't match up to every letter in hangmanWord 
// if(userGuess !== hangmanWord[i]){
//     guessLeft--
//     guessSoFar.push(userGuess)
// }




  

