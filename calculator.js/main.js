const $numbers = document.querySelectorAll('.number');
const $operators = document.querySelectorAll('.operator');
const $equalButton = document.querySelector('.equal-sign');
const calculation = [];

function pushNumber(event) {
    alert(event.target.value);
    calculation.push(event.target.value);  //pushes the numbers into the calculation array
}

function pushOperator(event) {
    alert(event.target.value);
}

function calculate(event) {
    alert(event.target.value);
    let num1 = '', num2 = '', operator = null, result;
    const opertors = ['*', '/', '+', '-'];

    for(let i = 0; i < calculation.length; i++) {
        const char = calculation[i];

        if($operators.includes(char)){
            operators = char;
        } else if(!operator) {
            num1 += char;
        } else {
            num2 += char;
        }
    }
}

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if(operator === '+') {
    result = num1 + num2;
}

$numbers.forEach(function(number) {
    $numbers.addEventListener('click', pushNumber);   //defines the first function needed
});

$operators.forEach(function(operator){
    operator.addEventListener('click', pushOperator);
});

$equalButton.addEventListener('click', calculate);



// Define a function named pushNumber that alert()s the number associated with its event argument when called; add this function as an event listener for the number buttons
// Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; add this function as an event listener for the operator buttons
// Define a function named calculate that alerts() = when pressed; add this function as an event listener for the = button
// Define a variable calculation pointing to an empty array
// Using Array.prototype.push, perform actions on the calculation variable when numbers and operators are pressed
// Using a for loop, alert() the calculation when = is pressed
// Make the numbers and calculations appear on the calculator display