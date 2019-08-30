# Word-Guess-Game
Word Guess Game
The game pulls from an array of strings and has the user guess letters to see if they are in that word.
If the user guesses the correct letter it is displayed via a new string containing "_" demonstrating the unguessed letters.
If the user guesses the word then the win score increases and the game resets.  If the user guesses wrong then the guess left couter decreases and the guessed letter is pushed to the letters already guessed array.  When the guess left counter reaches 0 then the game is over and resets.

I was able to have the majority of the game to work however I was unable to have the number of guesses decrease,
this was due to the action being called in a loop and it would activate on each letter of the string that didnt match
the guesses letter and not just once per guess.  This also caused the guessed letter to not properly push into the guessed
letter array.