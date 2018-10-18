var wordContainer = document.querySelector(".word_container");
var statusOfGame = document.querySelector(".status_of_game");
var displayWrongGuess = document.querySelector(".wrong_guesses");
var lossCounter = document.querySelector(".loseCounter");
var winCounter = document.querySelector(".winCounter");
var guessesLeft = document.querySelector(".num_of_guesses")

// var wordArray = ['Ghoul', 'Gobblin', 'Scarecrow', 'Ghost', 'Potion'];
var wordArray = [
  {word: 'coffin', hint: 'The person who built it sold it. The person who bought it never used it. The person who used it never saw it. What is it?'},
  {word: 'blood', hint: 'Dracula loves to draw this, as well as, put it in the bank. What is it?'},
  {word: 'skeleton', hint: 'I have a body, legs and arms but I have no guts. What am I? '},
  {word: 'vampire', hint: "No matter what type you are, when I’m thirsty I will come and find you no matter where you are. Who am I?"},
  {word: 'cemetery', hint: 'You’ll find me in the quietest, creepiest place in town, yet people are dying to get in. What am I?'},
  {word: 'ghoul', hint: 'A shapeshifting demon that lives in the desert.'}
]

var wordInDashes = [];
var word;
var tempWord;
var wrongGuesses = [];


//--------------------RETURNS A RANDOM WORD WITHIN ARRAY------------------------

function randomWordChooser() {
  let index = Math.floor(Math.random() * wordArray.length);
  return wordArray[index]['word'];
};

function replaceLettersWithDash() {
  word = randomWordChooser()
  tempWord = word.split('');
  console.log(word)
  word.split('').forEach(function(){wordInDashes.push('_')})
}

// ---------------------PRINTS THE STATUS OF THE GAME---------------------------

function status(letter) {
  for(let a = 0; a < tempWord.length; a++) {
    if(tempWord[a] == letter) {
      wordInDashes[a] = letter;
    }
  }
  statusOfGame.innerText = wordInDashes.join(' ');
}

// ------------------PUSHES INCORRECT GUESSES INTO AN ARRAY---------------------

function youreWrong(letter) {
  if (!wrongGuesses.includes(letter) && !tempWord.includes(letter)) {
    wrongGuesses.push(letter)
    displayWrongGuess.innerText = wrongGuesses;
    guessesLeft.style.display = 'block';
  }
}


function game() {
  wordInDashes = [];
  replaceLettersWithDash()
  statusOfGame.innerText = wordInDashes.join(' ');
  window.addEventListener('keypress', (letter) => {
    letter = letter.key;
    if(word != '') {
      if(word.length == 1 && word.includes(letter) == true) {
        word = word.split(letter).join('');
        status(letter);
        alert(`YOU WON! Incorrect guesses: ${wrongGuesses}`);
      }
      else if(word.includes(letter) == true) {
        word = word.split(letter).join('');
        status(letter);
        console.log(word);

      }else{
        youreWrong(letter);
      }
    }else {
      console.log(`Incorrect guesses: ${wrongGuesses}`)
      console.log('You Win!')
    }
  })
}

game();

// Functionality Checklist
// * If player has 6 wrong guesses than add 1 to loss counter
// * Add hint button.
// * next each word into an object which includes two hints.
// * Add a prompt or modal which asks the played if they would like to play again. If so, call game() one more gain.
