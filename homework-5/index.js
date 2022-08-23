const number1 = parseInt(prompt(`enter your first number`));
const operation = prompt(`enter operation(+-*/)`);
const number2 = parseInt(prompt(`enter your second number`));
if (isNaN(number1) || isNaN(number2))
    alert(`not correct number`)
else if (operation !== '/' &&
    operation !== '*' &&
    operation !== '-' &&
    operation !== '+')
    alert(`This operation is not exist`)
else if (operation === '*')
    alert(`your result is ${number1 * number2}`)
else if (operation === '+')
    alert(`your result is ${number1 + number2}`)
else if (operation === '-')
    alert(`your result is ${number1 - number2}`)
else if (operation === '/')
    alert(`your result is ${number1 / number2}`)
