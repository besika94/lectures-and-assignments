'use strict';
document.querySelector('.message');


let secretNumber = Math.trunc(Math.random() * 20 ) + 1 ;
console.log(secretNumber);




const check = document.querySelector('.check');
let message = document.querySelector('.message');
const number = document.querySelector('.number');
let count = 20;
const score = document.querySelector('.score');
const body = document.querySelector('body');
const again = document.querySelector('.again');


check.addEventListener('click',()=>{
  let inputNumber = document.querySelector('.guess').value ;

  console.log(inputNumber);

  if(count > 1){
    if(inputNumber == secretNumber){

      message.textContent = 'win';
      number.textContent = secretNumber;
      count--;
      score.textContent = count;
      body.style.backgroundColor = 'green';
      check.setAttribute('disabled','true');
      

    }else if(inputNumber > secretNumber){

      message.textContent = 'Too high';
      count--;
      score.textContent = count;

    }else if (inputNumber < secretNumber){

      message.textContent = 'Too low';
      count--;
      score.textContent = count;
    }
  }else{

    message.textContent = 'sory you loose';
    score.textContent = 0;
}

});

again.addEventListener('click', ()=>{
  message.textContent = 'Start guessing...';
  score.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 ) + 1 ;
  console.log(secretNumber)
  body.style.backgroundColor = '#222';
  number.textContent = '?';
  check.removeAttribute('disabled','false');
  count = 20;
  document.querySelector('.guess').value = '';
})

