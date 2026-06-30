// 1. Arrow Functions
// Used to write functions in a shorter and cleaner syntax.

// Convert this into an Arrow Function

// function greet(name) {
//     return "Hello " + name;
// }

let name = "diljeet";

let greet = () => {
    return "hello " + name;
};

console.log(greet());


// 2. Arrow Functions with Parameters
// Used to pass values as parameters to an arrow function.

// Convert this into an Arrow Function

// function square(num) {
//     return num * num;
// }

let square = (num) => {
    return num * num;
};

console.log(square(5));


// 3. Shortest Arrow Function
// Used when the function contains only one return statement.

// function oddEven(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

let oddEven = (num) => num % 2 === 0 ? "Even" : "Odd";

console.log(oddEven(7));