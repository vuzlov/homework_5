let min = prompt(`enter from`)
let max = prompt(`enter to`)
let rand = min - 0.5 + Math.random() * (max-min+1);
console.log(Math.round(rand))