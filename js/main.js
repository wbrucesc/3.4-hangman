(function(){
'use strict';

// filtering out commonWords list to words > 3 characters //
commonWords = commonWords.filter(function(word){
  return word.length > 3;
});

// choosing a random word from filtered commonWords list //
let randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];
// console.log(randomWord);

// breaking word into individual letters //
let body = document.querySelector('body');
let container = document.querySelector('.contain');

let splitWord = randomWord.split('');
console.log(splitWord);

splitWord.forEach(function(){
  let space = splitWord;
  let holder = document.createElement('span');
  holder.textContent = '-';
  container.appendChild(holder);
});

// let button = document.createElement('button');

let guessedLetters = [];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

//pulling out individual letter, appending to button, and app. button to body//
for (let i = 0; i < alphabet.length; i++) {
  let letter = alphabet[i];
  let button = document.createElement('button');
  button.textContent = letter;
  body.appendChild(button);
  button.addEventListener('click', pushLetter);
  // let letterGroup = [];
  // console.log(button);
}

// defining body //
function pushLetter(event){
  // Record the selected letter as being guessed
  let selection = event.target.textContent;
  guessedLetters.push(selection);
  console.log(guessedLetters);
  if (guessedLetters.length >= 8){
    alert('YOU LOSE');
  } 

  // Loop over splitword and check if each letter matches
  // the selection. if match is found, show that letter.
  splitWord.forEach(function(letter, index){
    if(letter === selection){
      let allSpans = document.querySelectorAll('.contain span')
      allSpans[index].textContent = letter;

      console.log(index);
      console.log(letter);
    }
  })

  // let holder = document.createElement('span');
  // holder.textContent = button.textContent;
  // console.log(selection);
}



































}());
