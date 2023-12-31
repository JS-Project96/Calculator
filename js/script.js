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
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    return operator(firstNumber, secondNumber);
};

const calcButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('.display');
const plusButton = document.querySelector('.plus');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const equalsButton = document.querySelector('.equals');

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

subtractButton.addEventListener('click',() => {
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

equalsButton.addEventListener('click', () => {
    if (secondNumber === 0) {
        secondNumber = displayValue;
    };
    displayValue = '';
    ans = operate(firstNumber, secondNumber, operator);
    display.textContent = ans;
});