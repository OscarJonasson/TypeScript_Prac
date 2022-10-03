// let age: any;

// age = 25;

let age: any = 25;

age = true;
age = 'hello';
age = { name: 'marth' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);

let ninja: { name: any; age: any };

ninja = { name: 'Rick', age: 55 };
console.log(ninja);

ninja = { name: 23, age: 'morty' };
console.log(ninja);
