// create variable to store my values. Wins, userGuess, computerChoices 
var wins = 0;
var guessLeft = 12;
var guessSoFar = [];
var userGuess;
var hangmanWord;
var blankWord = [];
var dashedWord = '';
var losses = 0;
var startGame = "Press any key to get started";
var image;

// Star Wars Character
var computerChoices = [
    {   name: "chewbacca",
        img: "assets/images/Chewbacca.gif"
    },
    {   name: "darthvader",
        img: "assets/images/Darth-Vader.gif"
    },
    {   name: "lukeskywalker",
        img: "assets/images/Luke-Skywalker.gif"
    },
    {   name: "hansolo",
        img: "assets/images/Han-Solo.gif"
    },
    {   name: "C3PO",
        img: "assets/images/c3po.gif"
    },
    {   name: "R2D2",
        img: "assets/images/R2D2.gif"
    },
    {
        name: "ackbar",
        img: "assets/images/Ackbar.gif"
    },
    {
        name: "bobafett",
        img: "assets/images/Boba-Fett.gif"
    },
    {
        name: "Lando",
        img: "assets/images/Lando.gif"
    },
    {
        name: "Leia",
        img: "assets/images/Leia.gif"
    },
    {
        name: "Palpatine",
        img: "assets/images/Palpatine.gif"
    },
    {
        name: "Porkins",
        img: "assets/images/Porkins.gif"
    },
    {
        name: "StarDestroyer",
        img: "assets/images/Star-Destroyer.gif"
    },
    {
        name: "Stormtrooper",
        img: "assets/images/Stormtrooper.gif"
    },
    {
        name: "WedgeAntilles",
        img: "assets/images/Wedge-Antilles.jpeg"
    },
    {
        name: "Yoda",
        img: "assets/images/Yoda.gif"
    }]

function displayImage(){
    document.querySelector("#image").innerHTML = ("<img src= '"+image + "' alt='hangman image' class='rounded img-fluid'img>")
}

// create function to display the results to page DOM
function updateDisplay(){
    document.querySelector("#start-game").innerHTML = startGame
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#guess-left").innerHTML = guessLeft;
    document.querySelector("#guess-so-far").innerHTML = guessSoFar;
    document.querySelector("#hangman-word").innerHTML = hangmanWordText;
    document.querySelector("#losses").innerHTML = losses;
}

// create function for computer to grab random word from array
function computerRandomWord(){
    // create function that will display blank word that is length of hangman word
    hangman = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
    hangmanWord = hangman.name.toLowerCase();
    image = hangman.img
    console.log(hangmanWord)
}

// create function to reset scores
function reset(){
    guessLeft = 12;
    guessSoFar = [];
    blankWord = [];
    dashedWord = '';
}

// Variable selecting audio file
var music = document.getElementById("background-music");

// calling function for computer to grab a random word from the computer choices array
computerRandomWord();
newBlankWord();
// causes background music to play
// audio.play();

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
    startGame = ""
    userGuess = event.key
    // for each guess the guess left decreases and is pushed to the guessSoFar array
    guessLeft--
    guessSoFar.push(userGuess)
    // causes music to start when a key is pressed
    music.play()
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
            startGame = "The force is strong with this one"
        }
    }
        // check to see if there are no more "-" in dashedWord, if so then win var goes up 1 and game resets
        if (dashedWord.indexOf('_') === -1 ){ // if there are no dashes left
            console.log("there are no more _")
            //win!
            wins++;
            startGame = "Impressive... Most impressive"
            displayImage();
            computerRandomWord();
            reset();
            newBlankWord()
            hangmanWordText = dashedWord;
        } else if (guessLeft === 0){
            losses++;
            startGame = "You lost, try again"
            computerRandomWord();
            reset();
            newBlankWord()
            hangmanWordText = dashedWord;
            }
            
            updateDisplay()

}