// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays

// with empty array, able to push
let ninjas: string[] = [];

// ninjans = [10, 24];
// ninjas = ['yoshi', 'mario'];

ninjas.push('zeku');

// union types
// in front of array, types need to be inside parenthesis
let mixed: (string | number | boolean)[] = [];
mixed.push(32, 'zangief');
// type needs to be added to mixed array
mixed.push(true);

let uid: string | number;

uid = '123';
uid = 123;
// uid = false;

// objects

let ninjaOne: object;
ninjaOne = { name: 'zeku', age: 45 };
ninjaOne = 'hello';

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = {
  name: 'mario',
  age: 20,
  beltColor: 'white',
  //   skills: ['kick', 'cape'],
};
