function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;
let displayValue = '';

function operate(firstNumber, secondNumber, operator){
    return operator(firstNumber, secondNumber);
};

const calcButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('.display');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');

for (let i=0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', () => {
        displayValue += calcButtons[i].textContent;
        display.textContent = displayValue;
    })
};

plusButton.addEventListener('click',() => {
    firstNumber = displayValue;
    displayValue = '';
    display.textContent = 0;
    operator = add;
});