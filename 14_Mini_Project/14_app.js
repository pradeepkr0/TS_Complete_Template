/* Your Code starts from Here */
var firstNumber = document.querySelector('#firstNumber');
var secondNumber = document.querySelector('#secondNumber');
var operator = document.querySelector('#operator');
var equalsButton = document.querySelector('#equals-button');
var plusButton = document.querySelector('#plus-button');
var minusButton = document.querySelector('#minus-button');
var divideButton = document.querySelector('#divide-button');
var multiplyButton = document.querySelector('#multiply-button');
var clearButton = document.querySelector('#clear-button');
var resultButton = document.querySelector('#result-button');
function changeOperatorPlus() {
    operator.innerHTML = '+';
}
function changeOperatorMinus() {
    operator.innerHTML = '-';
}
function changeOperatorDivide() {
    operator.innerHTML = '/';
}
function changeOperatorMultiply() {
    operator.innerHTML = '*';
}
function findResults() {
    var num1 = parseInt(firstNumber.value);
    var num2 = parseInt(secondNumber.value);
    var operation = operator.innerHTML.trim();
    var result = 0;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = 0;
            break;
    }
    resultButton.innerHTML = result + "";
}
function clearAll() {
    firstNumber.value = "";
    secondNumber.value = "";
    operator.innerHTML = '+';
    resultButton.innerHTML = "RESULT";
}
// Event Listeners
plusButton.addEventListener('click', changeOperatorPlus);
minusButton.addEventListener('click', changeOperatorMinus);
divideButton.addEventListener('click', changeOperatorDivide);
multiplyButton.addEventListener('click', changeOperatorMultiply);
clearButton.addEventListener('click', clearAll);
equalsButton.addEventListener('click', findResults);
