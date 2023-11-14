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

let firstNumber = 0;
let operator;
let secondNumber = 0;
let displayValue = '';

function operate(firstNumber, secondNumber, operator){
    return operator(firstNumber, secondNumber);
};

const calcButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('.display');
const plusButton = document.querySelector('.plus');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');

for (let i=0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', () => {
        displayValue += calcButtons[i].textContent;
        display.textContent = displayValue;
    })
};

function overrideLogic() {
    if (firstNumber === 0) {
        firstNumber = displayValue;
    };
    displayValue = '';
    display.textContent = 0;
};

plusButton.addEventListener('click',() => {
    overrideLogic();
    operator = add;
});

minusButton.addEventListener('click',() => {
    overrideLogic();
    operator = subtract;
});

multiplyButton.addEventListener('click',() => {
    overrideLogic();
    operator = multiply;
});

divideButton.addEventListener('click',() => {
    overrideLogic();
    operator = divide;
});