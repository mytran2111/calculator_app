
let buttonPlus;
let buttonEqual; 
let paragraph;
let clickNonZero = false;
let added = false;
let numButtons = [];
let pastInput = ""; // all the strings before now
let currentNumber = "0"; // the number being made right now
// paragraph.innerText = pastInput + currentNumber;

// NOTE: "12+324+2341+12".split("+");
// ["12", "324", "2341", "12"];

// numButtons[i] array for the HTMLElement buttons
// numButtons to have type Array<HTMLElement>
function handleLoad(){
  for (let i = 0; i < 10; i++){
    numButtons.push(document.getElementById('butt' + i));
  }
  
  for (let i = 0; i < 10; i++){
    numButtons[i].addEventListener('click', handleNumberClick(i));
  }

  
  buttonPlus = document.getElementById('plus');
  buttonEqual = document.getElementById('equal');
  
  buttonPlus.addEventListener('click', plus);
  buttonEqual.addEventListener('click', equal);
  paragraph = document.getElementById('my_para');
}

// change it so that whenever a number is pressed after 0 then it will only 
// display the number 

// returns an event handler for button i
function handleNumberClick(i) {
  function handleClick() {
    if (i == 0){
      if (!clickNonZero) {
        currentNumber = '0';
      } else {
        currentNumber += '0';
      }
      added = false;
    } else {
      if (!clickNonZero){
        currentNumber = '' + i;
        clickNonZero = true; 
      } else {
        currentNumber += i;
        clickNonZero = true; 
      }
      added = false; 
    }
    // update the text
    paragraph.textContent = pastInput + currentNumber; 
  }
  return handleClick;
}


function plus(){
  if (!added){
    pastInput += currentNumber;
    pastInput += "+"
    paragraph.textContent = pastInput;
    currentNumber = ''; 
    clickNonZero = false; 
    added = true;
  }
  // clickNonZero = false; 
}


function equal(){
  //paragraph.textContent = ;
  pastInput += currentNumber;
  let sumArray = pastInput.split('+');
  let sum = 0;
  for (let i = 0; i < sumArray.length; i++){
    sum += parseInt(sumArray[i]);
  }
  currentNumber = '';
  pastInput = ''; 
  paragraph.textContent = sum; 
}

window.addEventListener('load', handleLoad);