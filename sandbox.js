// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
// with empty array, able to push
var ninjas = [];
// ninjans = [10, 24];
// ninjas = ['yoshi', 'mario'];
ninjas.push('zeku');
// union types
// in front of array, types need to be inside parenthesis
var mixed = [];
mixed.push(32, 'zangief');
// type needs to be added to mixed array
mixed.push(true);
var uid;
uid = '123';
uid = 123;
// uid = false;
// objects
var ninjaOne;
ninjaOne = { name: 'zeku', age: 45 };
ninjaOne = 'hello';
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'white'
};
