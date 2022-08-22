const number1 = parseInt(prompt(`enter your first number`));
const operation = prompt(`enter operation(+-*/)`);
const number2 = parseInt(prompt(`enter your second number`));
const result = ''
if (isNaN(number1) || isNaN(number2)) {
    alert(`not correct number`)}
else if (operation !== '/'&&
    operation !=='*'&&
    operation !=='-'&&
    operation !=='+') {
    alert(`This operation is not exist`)}
else if (operation === '*') {
    result = number1 * number2
    alert(`your result is ${result}`)}
else if (operation === '+') {
    result = number1 + number2
    alert(`your result is ${result}`)}
else if (operation === '-') {
    result = number1 - number2
    alert(`your result is ${result}`)}
else if (operation === '/') {
    result = number1 / number2
    alert(`your result is ${result}`)}
