"use strict";
// ! if you are certain that it will exist
// const anchor = document.querySelector('a')!;
// if (anchor) {
//   // could possibly be null so, possible fix is if
//   console.log(anchor.href);
// }
// console.log(anchor.href);
// form grab
// const form = document.querySelector('form')!;
// const form = document.querySelector('.new-item-form')!;
// typeCasting
// const form = document.querySelector('.new-item-form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
