// create variable to store my values. Wins, userGuess, computerChoices 
var wins = 0;
var guessLeft = 12;
var guessSoFar = []
var userGuess;

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

// create function for computer to grab random word from array


// create function to reset scores



// create a onkeyup envent function to grab userGuess
document.onkeyup = function(event){
    userGuess = event.key
   
}