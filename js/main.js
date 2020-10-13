"use strict";
const btnEl = document.querySelector(".js-btn");
const numberEl = document.querySelector(".js-number");
const clueEl = document.querySelector(".js-clue");
const attemptsEl = document.querySelector(".js-attempts");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
 }
const random = getRandomNumber(100);
console.log(`Mi número aleatorio es ${random}`); 

function guessNumber(){
  const numberValue = numberEl.value ;
  const realNumber = parseInt(numberValue);
  console.log(realNumber);
  
  if (realNumber > random){
    clueEl.innerHTML = "Demasiado alto";
  }
  else if (realNumber < random){
    clueEl.innerHTML = "Demasiado bajo";
  }
  else if (realNumber === random){
    clueEl.innerHTML = "Has ganado, campeona";
  }
  else if (realNumber > 100){
    clueEl.innerHTML = "El número debe estar entre 1 y 100";
  }
}
btnEl.addEventListener("click", guessNumber);