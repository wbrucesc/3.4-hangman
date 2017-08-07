/* jshint esversion: 6*/
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

// creating spots for letters to be held
splitWord.forEach(function(){
  let space = splitWord;
  let holder = document.createElement('span');
  holder.textContent = '-';
  holder.className = 'hold';
  container.appendChild(holder);
});


let guessedLetters = [];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

//pulling out individual letter, appending to button, and app. button to body//
for (let i = 0; i < alphabet.length; i++) {
  let letter = alphabet[i];
  let button = document.createElement('button');
  button.textContent = letter;
  button.className = 'button';
  body.appendChild(button);
  button.addEventListener('click', function(e){
    let chosenButton = e.target;

    let attempt = checkGuess(chosenButton);
    if (attempt === false){
    pushLetter(chosenButton);
  }
    checkStatus();
    newGame();
  });
  // console.log(button);
}

function checkStatus(){
  if (guessedLetters.length >= 8){
    let sorryBox = document.createElement('h1');
    sorryBox.className = 'sorry';
    body.appendChild(sorryBox);
    sorryBox.textContent = 'Crikey You Lost! The word was ' + randomWord + '.';
  }
console.log(guessedLetters.length);
  let allSpans = Array.prototype.slice.call(document.querySelectorAll('.contain span'));
  let allSpansArray = allSpans.map(function(item){
    return item.textContent;
  });
  // console.log('spans', allSpansArray);
  // console.log('word', splitWord);
  console.log(allSpansArray.join() === splitWord.join());
  if (allSpansArray.join() === splitWord.join()) {
    let happyBox = document.createElement('h1');
    happyBox.className = 'happy';
    body.appendChild(happyBox);
    happyBox.textContent = 'You Win! Good on ya Mate!';
  }
// console.log(allSpansArray);
}


// defining body //
function pushLetter(button){
  // Record the selected letter as being guessed

  let selection = button.textContent;
  button.style.backgroundColor = "black";
  if(!guessedLetters.includes(selection)){
    guessedLetters.push(selection);
  }
  let lives = document.createElement('div');
  lives.className = 'lives';
  let livesLeft = 8 - guessedLetters.length;
  lives.textContent = 'Guesses Remaining: ' + livesLeft;
  body.appendChild(lives);
  // console.log(guessedLetters);
}


function checkGuess(button){
  let goodGuess = false;
  let selection = button.textContent;
  // Loop over splitword and check if each letter matches
  // the selection. if match is found, show that letter.
  splitWord.forEach(function(letter, index){
    if(letter === selection){
      let allSpans = document.querySelectorAll('.contain span');
      allSpans[index].textContent = letter;
      goodGuess = true;
      // console.log(letter);
    }
  });
  return goodGuess;
}


// Start new game reload?

// let startNewButton = document.createElement('button');
//   startNewButton.textContent = 'Give it another go';
//   startNewButton.eventListener = ('click', function(e){
//     window.location.reload();
//   });
//
// body.appendChild(startNewButton);


// function newGame(){
//   let startNew = document.createElement('button');
//   startNew.textContent = 'Play Again';
//   body.appendChild(startNew);
//   if (happyBox || sorryBox){
//     window.location.reload(e);
//   }
// }


























}());
