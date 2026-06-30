// 1. Rest Operator
// Used to collect multiple values into a single array.

// Practice Example

function show(...names) {

    console.log(names);

}

show("Diljeet", "Supan", "Sahaj");


// Another Example (Find Sum)

function sum(...numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {

        total += numbers[i];

    }

    return total;

}

console.log(sum(10, 20, 30));


// Another Example (Find Product)

function multiply(...numbers) {

    let result = 1;

    for (let i = 0; i < numbers.length; i++) {

        result *= numbers[i];

    }

    return result;

}

console.log(multiply(2, 3, 4));


// Another Example (First Value + Rest Values)

function display(first, ...others) {

    console.log("First Value:", first);
    console.log("Remaining Values:", others);

}

display(10, 20, 30, 40, 50);


// Another Example (Store Student Names)

function students(...names) {

    console.log(names);

}

students("Diljeet", "Supan", "Sahaj", "Aman");