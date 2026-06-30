// 1. Spread Operator
// Used to expand elements of an array or properties of an object.

// Practice Example

const numbers = [10, 20];

const newNumbers = [...numbers, 30, 40];

console.log(newNumbers);


// Another Example (Copy an Array)

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2);


// Another Example (Merge Two Arrays)

const firstArray = [1, 2];
const secondArray = [3, 4];

const mergedArray = [...firstArray, ...secondArray];

console.log(mergedArray);


// Another Example (Spread with Objects)

const student = {
    name: "Diljeet",
    age: 21
};

const newStudent = {
    ...student,
    city: "Amritsar"
};

console.log(newStudent);


// Another Example (Update Object Property)

const mobile = {
    brand: "Samsung",
    price: 25000
};

const updatedMobile = {
    ...mobile,
    price: 22000
};

console.log(updatedMobile);