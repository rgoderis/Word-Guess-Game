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
// switch to an array
var computerChoices = [
    {   name: "chewbacca",
        img: "https://i.kinja-img.com/gawker-media/image/upload/s--CrRo6-ck--/c_scale,f_auto,fl_progressive,q_80,w_800/lm0uzbfa560lytndwz5c.png"
    },
    {   name: "darthvader",
        img: "https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzAxXFxcLzAxMDk0MTQ4XFxcL3JvZ3VlLW9uZS1kYXJ0aC12YWRlci0wMi5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvaGVyXFxcL25vLWltYWdlLnBuZz9pZD0wZDJkNjI3YzA1OWI5ZWRjYWIwZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIzZjk5ZjhiMGZhMmJkNWUwMTdkZmE2ZjMxY2U1ZTViMjE5YTA5N2VkIn0=/rogue-one-darth-vader-02.jpg"
    },
    {   name: "lukeskywalker",
        img: "https://www.maxim.com/.image/t_share/MTYwMzUwMDc2Njc2MzUxMDU1/luke-skywalker-light-saber-screengrab.jpg"
    },
    {   name: "hansolo",
        img: "https://compote.slate.com/images/2b6fb34a-8047-4e17-b3d5-64987519657d.jpg"
    },
    {   name: "C3PO",
        img: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/46/1479397679-c-3po-see-threepio-68fe125c.jpeg?crop=0.501xw:1.00xh;0.301xw,0&resize=480:*"
    },
    {   name: "R2D2",
        img: "https://starwarsblog.starwars.com/wp-content/uploads/2018/08/star-wars-r2-d2-tall-image.jpg"
    }]



// create function to display the results to page DOM
function updateDisplay(){
    document.querySelector("#image").innerHTML = image
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
    hangmanImage = hangman.image
    console.log(hangmanWord)
}

// create function to reset scores
function reset(){
    guessLeft = 12;
    guessSoFar = [];
    blankWord = [];
    dashedWord = '';
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
    startGame = ""
    userGuess = event.key
    // for each guess the guess left decreases and is pushed to the guessSoFar array
    guessLeft--
    guessSoFar.push(userGuess)
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
            hangmanImage = hangmanWord
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