let num=parseInt(Math.random()*100+1);
console.log(num);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowhi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;//do not have any use in this logic

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  //validating the user input type of input he is giving
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a number more than 1')

  }else if(guess>100){
    alert('Please enter a number less then 100')

  }else{
    prevGuess.push(guess)
    if(numGuess==5){
      cleanUpGuess(guess);
      displayMessage(`Game Over.random number was ${num}`);
      endGame();
    }else{
      cleanUpGuess(guess);
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //print message after validating 
  if(guess===num){
    displayMessage(`You guessed it right`);
  }else if(guess<num){
    displayMessage(`Number is too low`);
  }else{
    displayMessage(`Number is too high`)
  }
}

function cleanUpGuess(guess){
  userInput.value=''
  guessSlot.innerHTML+=`${guess},`;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  //interact with dom and manipulate it
  lowhi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
  userInput.value="";
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">start new Game</h2>`
  startOver.appendChild(p);
  playGame=false;
  newGame()
}

function newGame(){
  const newGamebtn=document.querySelector('#newGame');
  newGamebtn.addEventListener('click',function(e){
    num=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    // playGame=true;
  })
}


