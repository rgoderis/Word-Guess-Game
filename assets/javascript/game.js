// create variable to store my values. Wins, userGuess, computerChoices 
var wins = 0;
var guessLeft = 12;
var guessSoFar = [];
var userGuess;
var hangmanWord;
var blankWord = []

// Star Wars Character
var computerChoices = [{
    name: "Chewbacca",
    img: ""
    },
    {
    name: "Darth Vader",
    img: "",
    },
    {
    name: "Luke Skywalker",
    img: "",
    },
    {
    name: "Han Solo",
    img: "",
    },        
    {
    name: "C3PO",
    img: "",
    },        
    {
    name: "R2D2",
    img: "",
    }     
]

// create function to display the results to page DOM
function updateDisplay(){
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#guess-left").innerHTML = guessLeft;
    document.querySelector("#guess-so-far").innerHTML = guessSoFar;
    document.querySelector("#hangman-word").innerHTML = hangmanWord;
    document.querySelector("#blank-word").innerHTML = blankWord;
}

// create function for computer to grab random word from array
function computerRandomWord(){
    // create function that will display blank word that is length of hangman word
    hangmanWord = computerChoices[Math.floor(Math.random() * computerChoices.length)].name.toLowerCase();
    for(var i = 0; i < hangmanWord.length; i++){
        blankWord.push("_");
    }
}

// create function to reset scores
function reset(){
    guessLeft = 12;
    guessSoFar = [];
}

computerRandomWord();
updateDisplay();
// create a onkeyup envent function to grab userGuess
document.onkeyup = function(event){
    userGuess = event.key

// cycle through hangmanWord
    for(var i = 0; i < hangmanWord.length; i++){
        if(userGuess === hangmanWord[i]){
            console.log("correct" + userGuess)
            blankWord.push(userGuess)
            blankWord.pop("_")
            updateDisplay()

        }

    }
   
}