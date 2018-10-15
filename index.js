var words = ['Ghoul', 'Gobblin', 'Scare Crow'];

function randomWordChooser() {
  var index = Math.floor(Math.random() * words.length);
  return words[index];
};

function replaceLettersWithDash() {
  var wordInDashes = '';
  var word = randomWordChooser()
  for(let a = 0; a < word.length; a++) {
    wordInDashes += ' _ ';
  }
  console.log(word);
  return wordInDashes;
}
