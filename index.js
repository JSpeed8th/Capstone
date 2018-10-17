var wordArray = ['Ghoul', 'Gobblin', 'Scarecrow', 'Ghost', 'Potion'];
var wordInDashes = [];
var word;
var tempWord;
var wrongGuesses = [];


//--------------------RETURNS A RANDOM WORD WITHIN ARRAY------------------------

function randomWordChooser() {
  let index = Math.floor(Math.random() * wordArray.length);
  return wordArray[index];
};

// function replaceLettersWithDash() {
//   word = randomWordChooser()
//   tempWord = word.split('');
//   for(let a = 0; a < word.length; a++) {
//     wordInDashes += '_';
//   }
//   console.log(word);
//   wordInDashes = wordInDashes.split('');
// }

function replaceLettersWithDash() {
  word = randomWordChooser()
  tempWord = word.split('');
  console.log(word)
  word.split('').forEach(function(){wordInDashes.push('_')})
}

function guessIt() {
  wordInDashes = [];
  replaceLettersWithDash()
  console.log(wordInDashes.join(' '));
  while(word != '') {
    var letter = prompt('Guess a word!');
    if(word.includes(letter) == true) {
      word = word.split(letter).join('');
      status(letter);
      console.log(word);

    } else{
      youLost(letter);
      alert('Please, try again')
    }
  }
  console.log(`Incorrect guesses: ${wrongGuesses}`)
  return 'You Win!'
}

// ---------------------PRINTS THE STATUS OF THE GAME---------------------------

function status(letter) {
  for(let a = 0; a < tempWord.length; a++) {
    if(tempWord[a] == letter) {
      wordInDashes[a] = letter;
    }
  }
  console.log(wordInDashes.join(' '))
}

// ------------------PUSHES INCORRECT GUESSES INTO AN ARRAY---------------------

function youLost(letter) {
  if (!wrongGuesses.includes(letter)) {
    wrongGuesses.push(letter)
  }
}
