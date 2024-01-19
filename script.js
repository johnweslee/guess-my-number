'use strict';

let checkButtonElementSelector = '.check',
    againButtonElementSelector = '.again',
        displayMessageElementSelector = '.message',
            scoreElementSelector = '.score',
        highScoreElementSelector = '.highscore',
    secretNumberElementSelector = '.number',
guessNumberInputElementSelector = '.guess';

const defaultScore = Number(document.querySelector(scoreElementSelector).textContent);
let gameScore = defaultScore;
let highScore = Number(document.querySelector(highScoreElementSelector).textContent);

let secretNumber = getSecretNumber(),
inputNumber = Number(document.querySelector('.guess').value);

function getSecretNumber() {
  let randomSecretNumber = Math.trunc(Math.random() * 10);
  console.log(randomSecretNumber);
  return randomSecretNumber;
}

function setElementContent(elementSelector, contentValue){
    document.querySelector(elementSelector).textContent = contentValue;
}

function disableButton(buttonSelector, disableBooleanValue){
    document.querySelector(buttonSelector).disabled = disableBooleanValue;
}

function setElementBackgroundColor(elementSelector, colorValue){
    document.querySelector(elementSelector).style.backgroundColor = colorValue;
}