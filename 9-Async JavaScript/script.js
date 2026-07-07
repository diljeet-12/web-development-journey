// 1. Callback Functions
// A callback is a function passed as an argument to another function.
// It is executed later when needed or after a task is completed.


// 1: Create a basic callback function.

function greet(name) {
    console.log(`Hello ${name}`);
}

function execute(callback) {
    callback("Diljeet");
}

execute(greet);


// 2: Print the square of a number using a callback.

function square(num) {
    console.log(num * num);
}

function calculate(callback) {
    callback(7);
}

calculate(square);


// 3: Print "Processing..." and then welcome the user using a callback.

function welcome(name) {
    console.log(`Welcome Aman`);
}

function login(callback) {
    console.log("Processing...");
    callback();
}

login(welcome);


// 4: Create a calculator using callbacks.

function add(a, b) {
    console.log(a + b);
}

function calculateOperation(a, b, callback) {
    callback(a, b);
}

calculateOperation(10, 5, add);


// 5: Multiply two numbers using callbacks.

function multiply(a, b) {
    console.log(a * b);
}

calculateOperation(2, 3, multiply);


// 6: Print a message after 2 seconds using setTimeout().

console.log("Start");

setTimeout(() => {
    console.log("Learning JavaScript");
}, 2000);

console.log("End");


// 7: Print all elements of an array using forEach() callback.

const numbers = [10, 20, 30];

numbers.forEach(function (num) {
    console.log(num);
});


// 8: Print each student's name using forEach() callback.

const students = ["Diljeet", "Aman", "Sahaj"];

students.forEach(function (student) {
    console.log(student);
});


// 9: Print each fruit with its index using forEach() callback.

const fruits = ["Apple", "Mango", "Banana"];

fruits.forEach(function (fruit, index) {
    console.log(index, fruit);
});


// 10: Execute different callbacks using the same function.

function success() {
    console.log("Payment Successful");
}

function failed() {
    console.log("Payment Failed");
}

function payment(statusCallback) {
    statusCallback();
}

payment(success);
payment(failed);