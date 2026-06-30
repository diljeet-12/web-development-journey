// 1. Default Parameters
// Used to assign default values to function parameters.

// Practice Example

function introduce(name = "Unknown", age = 18) {

    return `Name: ${name}, Age: ${age}`;

}

console.log(introduce());


// Another Example (Greeting User)

function greet(name = "Guest") {

    return `Hello ${name}`;

}

console.log(greet());
console.log(greet("Diljeet"));


// Another Example (Multiply Numbers)

function multiply(a, b = 2) {

    return a * b;

}

console.log(multiply(5));
console.log(multiply(5, 4));


// Another Example (Calculate Discount)

function calculatePrice(price, discount = 10) {

    return price - discount;

}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 20));


// Another Example (Student Details)

function student(name = "Unknown", course = "JavaScript") {

    return `${name} is learning ${course}.`;

}

console.log(student());
console.log(student("Diljeet", "React"));