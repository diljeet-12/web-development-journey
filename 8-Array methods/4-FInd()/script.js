// 4. find()
// Used to find the FIRST element that matches a condition.
// It returns only one element.
// If no element matches, it returns undefined.

// Practice Example

const numbers = [5, 7, 12, 18, 20];

const firstEven = numbers.find((num) => {
    return num % 2 === 0;
});

console.log(firstEven);


// Another Example (First Number Greater Than 10)

const values = [3, 8, 15, 20, 25];

const greaterThanTen = values.find((value) => {
    return value > 10;
});

console.log(greaterThanTen);


// Another Example (Find Name Starting with "A")

const names = ["Ram", "Aman", "Ajay", "Shyam"];

const firstAName = names.find((name) => {
    return name.startsWith("A");
});

console.log(firstAName);


// Another Example (Array of Objects)

const students = [
    { name: "Diljeet", marks: 85 },
    { name: "Aman", marks: 45 },
    { name: "Sahaj", marks: 72 }
];

const topper = students.find((student) => {
    return student.marks > 80;
});

console.log(topper);


// Another Example (Find Product)

const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" }
];

const product = products.find((item) => {
    return item.id === 2;
});

console.log(product);


// Another Example (No Match Found)

const ages = [12, 15, 16, 17];

const adult = ages.find((age) => {
    return age >= 18;
});

console.log(adult);