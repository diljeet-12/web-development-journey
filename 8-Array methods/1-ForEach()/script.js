// 1. forEach()
// Used to perform an action on every element of an array.
// It does NOT return a new array.

// Practice Example

const numbers = [10, 20, 30, 40];

numbers.forEach((num) => {
    console.log(num);
});


// Another Example (Greeting Users)

const names = ["Diljeet", "Aman", "Sahaj"];

names.forEach((name) => {
    console.log(`Hello ${name}`);
});


// Another Example (Print Squares)

const values = [2, 4, 6, 8];

values.forEach((value) => {
    console.log(value * value);
});


// Another Example (Array of Objects)

const students = [
    { name: "Diljeet", age: 21 },
    { name: "Aman", age: 20 },
    { name: "Sahaj", age: 22 }
];

students.forEach((student) => {
    console.log(`${student.name} is ${student.age} years old.`);
});


// Another Example (Using Index)

const fruits = ["Apple", "Mango", "Banana"];

fruits.forEach((fruit, index) => {
    console.log(`${index} : ${fruit}`);
});