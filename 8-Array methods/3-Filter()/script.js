// 3. filter()
// Used to create a NEW array containing only the elements
// that satisfy a given condition.
// It returns a new array.

// Practice Example

const numbers = [5, 10, 15, 20, 25];

const greaterThanTen = numbers.filter((num) => {
    return num > 10;
});

console.log(greaterThanTen);


// Another Example (Even Numbers)

const values = [12, 7, 18, 3, 20];

const evenNumbers = values.filter((value) => {
    return value % 2 === 0;
});

console.log(evenNumbers);


// Another Example (Names Starting with "A")

const names = ["Ram", "Aman", "Shyam", "Ajay"];

const aNames = names.filter((name) => {
    return name.startsWith("A");
});

console.log(aNames);


// Another Example (Array of Objects)

const students = [
    { name: "Diljeet", marks: 85 },
    { name: "Aman", marks: 45 },
    { name: "Sahaj", marks: 72 },
    { name: "Rahul", marks: 35 }
];

const passedStudents = students.filter((student) => {
    return student.marks >= 50;
});

console.log(passedStudents);


// Another Example (Adult Age)

const ages = [15, 18, 21, 16, 25, 30];

const adults = ages.filter((age) => {
    return age >= 18;
});

console.log(adults);


// Another Example (Expensive Products)

const products = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 12000 }
];

const expensiveProducts = products.filter((product) => {
    return product.price > 5000;
});

console.log(expensiveProducts);