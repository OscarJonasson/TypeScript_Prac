// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[0] = 3;
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('mikko');
// numbers[3] = 'mikko';
var mixed = ['ken', 4, 'blanka', 20];
mixed.push('vega');
mixed.push(30);
mixed[0] = 3;
// objects
var ninja = {
    name: 'mario',
    belt: 'glitter',
    age: 44
};
ninja.age = 40;
ninja.name = 'bison';
// needs to be a number
// ninja.age = '23';
// need to be declared in ninja before adding
// ninja.skills = ['judo', 'kick'];
ninja = 'asdf';
// all of these need to match the original object to be changed, without age is not allowed/ with is ok
ninja = {
    name: 'yoshi',
    belt: 'pink',
    age: 42
};
