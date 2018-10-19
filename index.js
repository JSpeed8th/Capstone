var wordContainer = document.querySelector(".word_container");
var statusOfGame = document.querySelector(".status_of_game");
var displayWrongGuess = document.querySelector(".wrong_guesses");
var lossCounter = document.querySelector(".loseCounter");
var winCounter = document.querySelector(".winCounter");
var guessesLeft = document.querySelector(".num_of_guesses");
var hintButton = document.querySelector(".hint_button");
var hintContainer = document.querySelector(".hint_container");
var displayHint = document.querySelector(".displayHint");
var wrongLetters = document.querySelector(".wrong_letters");
var modal = document.querySelector(".modal");
var yesButton = document.querySelector(".yesbutton");
var noButton = document.querySelector(".nobutton");
var modalPara = document.querySelector(".modal_para");

// ---------------------ARRAY CONTAINING WORDS AND HINTS------------------------

var wordArray = [
  {word: 'coffin', hint: 'The person who built it sold it. The person who bought it never used it. The person who used it never saw it. What is it?'},
  {word: 'blood', hint: 'Dracula loves to draw this, as well as, put it in the bank. What is it?'},
  {word: 'skeleton', hint: 'I have a body, legs and arms but I have no guts. What am I?'},
  {word: 'vampire', hint: "No matter what type you are, when I’m thirsty I will come and find you no matter where you are. Who am I?"},
  {word: 'cemetery', hint: 'You’ll find me in the quietest, creepiest place in town, yet people are dying to get in. What am I?'},
  {word: 'ghoul', hint: 'A shapeshifting demon that lives in the desert.'},
  {word: 'troll', hint: 'I live under bridges and in caves. I eat travelers who pass my way. Who am I'},
  {word: 'darkness', hint: 'I can’t be seen, found, heard or smelled. I lie behind stars and under hills, I fill empty holes, come first and follow after. What am I?'}
];

// -----------------------------GLOBAL VARIABLES--------------------------------

var wordInDashes;
var word;
var index;
var wrongGuesses = [];
var wrongCounter;


//--------------------RETURNS A RANDOM WORD WITHIN ARRAY------------------------

function randomWordChooser() {
  index = Math.floor(Math.random() * wordArray.length);
  return wordArray[index]['word'];
};

// ----------------------REPLACING LETTERS WITH DASHES--------------------------

function replaceLettersWithDash() {
  // calls the random word function and assigns the global word variable to its result.
  word = randomWordChooser()
  console.log(word)
  // Pushes an underscore to array for each letter within word.
  word.split('').forEach(function(){wordInDashes.push('_')})
}

// ---------------------DISPLAYS THE STATUS OF THE GAME-------------------------

function status(letter) {
  for(let a = 0; a < word.length; a++) {
    // If letter is within word, add letter in dash array at that index.
    if(word[a] == letter) {
      wordInDashes.splice(a, 1, letter);
    }
  }
  // Joining and displaying dash array in order to make it look pretty for the user.
  statusOfGame.innerText = wordInDashes.join(' ');
}

// ------------------PUSHES INCORRECT GUESSES INTO AN ARRAY---------------------

function youreWrong(letter) {
  console.log('youre wrong')
  // If wrong letter is not within array, push it within array and display the array.
  if (!wrongGuesses.includes(letter) && !word.includes(letter)) {
    wrongGuesses.push(letter)
    displayWrongGuess.innerText = wrongGuesses;

    wrongCounter--;
    guessesLeft.innerText = wrongCounter;
    guessesLeft.style.display = 'block';
  }
}

  function gameOver() {
    if(wrongGuesses.length == 6) {
      restartOrNaw();
      wrongGuesses = [];
      loseCounter++;
      lossCounter.innerText = loseCounter;
      // reset()
    }
  };

  function youWon() {
    if(wordInDashes.join('') == word) {
      restartOrNaw();
      wrongGuesses = [];
      winningCounter++;
      lossCounter.innerText = loseCounter;
    }
  };
// ------------------------------GAME FUNCTION----------------------------------

function game() {
  // Assigns global variable to an array;
  wrongCounter = 6;
  wordInDashes = [];

  guessesLeft.style.display = 'none';
  displayHint.style.display = 'none';
  hintButton.style.display = 'block';
  displayWrongGuess.innerText = '';
  // Calls the function which pushes underscores to an array for every letter within word.
  replaceLettersWithDash();
  // Joining and displaying dash array in order to make it look pretty for the user.
  statusOfGame.innerText = wordInDashes.join(' ');
  // Added an event listener for everykey inputted by user and assigns it to the variable, "letter".
  window.addEventListener('keydown', (letter) => {
    if(wordInDashes.join('') != word) {
      letter = letter.key;
      if(word.includes(letter)) {
        status(letter);
        youWon()
      }else{
        youreWrong(letter)
        gameOver()
      }
    }
  })
};

// function reset() {
//   guessesLeft.style.display = 'none';
//   displayHint.style.display = 'none';
//   hintButton.style.display = 'block';
//   wrongLetters.innerText = '';
//   // alert('You Win!')
//   game();
// }

function restartOrNaw() {
  modal.style.display = "block";
  // Restarts Games
  yesButton.addEventListener('click', function() {
    game();
    modal.style.display = "none";
  })
  noButton.addEventListener('click', function(){
    modalPara.innerText = "Thanks for playing!"
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
  })
}
// ------------------------HINT BUTTON FUNTIONALITY-----------------------------

hintButton.addEventListener('click', function () {
  showHint()
})

function showHint() {
  // HIDES BUTTON, ASSIGNS TEXT TO A HINT, AND MAKES THE P TAG CONTAINING HINT VISIBLE
  hintButton.style.display = 'none';
  displayHint.style.fontSize = '1.5em';
  displayHint.innerText = wordArray[index]['hint'];
  displayHint.style.display = 'block';
}

game();
// -------------------SETTING WIN/LOSE COUNTERS TO ZERO-------------------------

var loseCounter = 0;
var winningCounter = 0;
lossCounter.innerText = loseCounter;
winCounter.innerText = winningCounter;

// Functionality Checklist
// * If player has 6 wrong guesses than add 1 to loss counter
// * Add a prompt or modal which asks the played if they would like to play again. If so, call game() one more gain.

// if there are six wrong guesses than game over. If there are six wrong guesses within array, game over



// -----------------------------------MODAL-------------------------------------
