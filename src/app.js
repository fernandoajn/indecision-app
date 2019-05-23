console.log("app.js is running");

// import divide, { square, add, subtract } from './utils';

// console.log(square(7));
// console.log(add(100, 50));
// console.log(subtract(75,20));
// console.log(divide(10,2));

import { isAdult, canDrink } from './person';
import isSenior from './person';

let age = 19;

console.log(isAdult(age));
console.log(canDrink(age));
console.log(isSenior(age));