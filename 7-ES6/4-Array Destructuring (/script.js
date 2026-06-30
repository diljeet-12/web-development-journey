// 1. Array Destructuring
// Used to extract values from an array into separate variables.

// Practice Example

const fruits = ["Apple", "Mango", "Banana"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);


// Another Example

const colors = ["Red", "Blue", "Green"];

const [color1, color2, color3] = colors;

console.log(color1);
console.log(color2);
console.log(color3);


// Another Example (Skip Values)

const numbers = [10, 20, 30, 40];

const [a, , c, d] = numbers;

console.log(a);
console.log(c);
console.log(d);


// Another Example (Two Variables)

const students = ["Diljeet", "Supan", "Sahaj"];

const [student1, student2] = students;

console.log(student1);
console.log(student2);


// Another Example (React useState Syntax)

const user = ["Diljeet", 21];

const [name, age] = user;

console.log(name);
console.log(age);