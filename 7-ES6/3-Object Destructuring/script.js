// 1. Object Destructuring
// Used to extract values from an object into separate variables.

// Practice Example

const car = {
    company: "BMW",
    model: "X5",
    year: 2024
};

const { company, model, year } = car;

console.log(company);
console.log(model);
console.log(year);


// Another Example

const student = {
    name: "Diljeet",
    age: 21,
    city: "Amritsar"
};

const { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);


// Another Example (Rename Variables)

const mobile = {
    brand: "Samsung",
    price: 25000
};

const { brand: mobileBrand, price: mobilePrice } = mobile;

console.log(mobileBrand);
console.log(mobilePrice);



// 2. Default Parameters
// Used to assign default values to function parameters.

// Practice Example

function introduce(name = "Unknown", age = 18) {

    return `Name: ${name} Age: ${age}`;

}

console.log(introduce());


// Another Example

function greet(name = "Guest") {

    return `Hello ${name}`;

}

console.log(greet());


// Another Example

function multiply(a, b = 2) {

    return a * b;

}

console.log(multiply(5));
console.log(multiply(5, 4));