"use strict";
// let greet: Function;
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
// must return a number in all cases so the else is needed to return substrc if add is not given
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
// logDetails = (ninja: { name: string; age: number }) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
