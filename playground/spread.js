// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
//Hi Andrew, you are 25

function greeting (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greeting(...person);
greeting(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (item){
  console.log(item);
});
