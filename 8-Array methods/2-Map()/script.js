// 2. map()
// Used to create a NEW array by transforming every element.
// It returns a new array.

// Practice Example

const numbers = [2, 4, 6];

const doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);


// Another Example (Greeting Users)

const names = ["Ram", "Shyam", "Mohan"];

const greetings = names.map((name) => {
    return `Hello ${name}`;
});

console.log(greetings);


// Another Example (Convert to Uppercase)

const fruits = ["apple", "mango", "banana"];

const upperCaseFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(upperCaseFruits);


// Another Example (Square Numbers)

const values = [1, 2, 3, 4, 5];

const squares = values.map((value) => {
    return value * value;
});

console.log(squares);


// Another Example (Array of Objects)

const students = [
    { name: "Diljeet", marks: 85 },
    { name: "Aman", marks: 90 },
    { name: "Sahaj", marks: 78 }
];

const studentNames = students.map((student) => {
    return student.name;
});

console.log(studentNames);


// Another Example (Add Percentage)

const marks = [60, 70, 80];

const updatedMarks = marks.map((mark) => {
    return mark + 5;
});

console.log(updatedMarks);