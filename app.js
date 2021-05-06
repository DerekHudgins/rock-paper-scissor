// import functions and grab DOM elements
import { getRandomThrow, rockPaperScissor } from './utils.js';

const confrimChoice = document.querySelector('#confirm-btn');
const totalWins = document.querySelector('#total-wins');
const totalLoss = document.querySelector('#total-loss');
const totalDraw = document.querySelector('#total-draw');

// initialize state
let wins = 0;
let loss = 0;
let draw = 0;

// set event listeners 
confrimChoice.addEventListener('click', () =>{
  // get user input
    const randomGuess = getRandomThrow();
    const checkRadioButton = document.querySelector(':checked');
    const userGuess = checkRadioButton.value;

    if (userGuess === randomGuess) {
        draw++;
        totalLoss.textContent = draw;
    } else if (rockPaperScissor(userGuess, randomGuess) === 'win') {
        wins++;
        totalWins.textContent = wins;
    } else if (rockPaperScissor(userGuess, randomGuess) === 'lose') {
        loss++;
        totalLoss.textContent = loss;
    }
});    


  // use user input to update state 

  // update DOM to reflect the new state
 

  
