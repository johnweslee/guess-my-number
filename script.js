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

document.querySelector(guessNumberInputElementSelector).addEventListener('change',function(){
    inputNumber = Number(document.querySelector('.guess').value);
});

document.querySelector(againButtonElementSelector).addEventListener('click', function(){
    setElementBackgroundColor('body','Black');
    disableButton(checkButtonElementSelector, false);
    disableButton(againButtonElementSelector, true);
    setElementContent(scoreElementSelector, defaultScore);
    gameScore = defaultScore;
    secretNumber = getSecretNumber();
    setElementContent(secretNumberElementSelector, '?');
});

document.querySelector(checkButtonElementSelector).addEventListener('click', function(){
    if(!(gameScore < 1)){
        if(!(inputNumber >= 0 && inputNumber <= 9)){
            setElementContent(displayMessageElementSelector, 'Enter a number between 0 and 9 only!');
        }else{
            if(inputNumber !== secretNumber){
                if(inputNumber > secretNumber){
                    setElementContent(displayMessageElementSelector, 'Your guess is too high!');
                }
                else{
                    setElementContent(displayMessageElementSelector, 'Your guess is too low!');
                }
                gameScore--;
                setElementContent(scoreElementSelector, gameScore);
            }else{
                setElementContent(secretNumberElementSelector, secretNumber);
                setElementBackgroundColor('body','Green');
                setElementContent(displayMessageElementSelector, 'Correct guess!');
                disableButton(checkButtonElementSelector, true);
                disableButton(againButtonElementSelector, false);
                if(gameScore >= highScore){
                    highScore = gameScore;
                    setElementContent(highScoreElementSelector, highScore);
                } 
            }
        }
    }else{
        setElementContent(displayMessageElementSelector, 'Game over!');
        setElementBackgroundColor('body','Red');
        disableButton(checkButtonElementSelector, true);
        disableButton(againButtonElementSelector, false);
        gameScore = defaultScore;
    }    
});

