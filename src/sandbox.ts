// let greet= () =>{
//     console.log('hello world');
// }

// greet = 'hello'

let greet: Function;

greet = () => {
  console.log('hello sir');
};

// const add = (a: number, b: number) => {
//   console.log(a + b);
// };

// add(5, 10);
// if no default value for c? (optional parameter)
// const add = (a: number, b: number, c?: number | string) => {
//   console.log(a + b);
//   console.log(c);
// };

// if default value is given no need for c?
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, 'sadf');

// you can set the type of return after parenthesis with :type
const minus = (a: number, b: number): number => {
  return a + b;
};

// result type will be set to number
let result = minus(10, 7);
// result = 'something else';
