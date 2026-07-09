// 3. Async / Await
// async makes a function return a Promise.
// await waits until the Promise is completed.


// 1: Create an async function and return a string.

async function greet() {
    return "Hello Diljeet";
}

greet().then((result) => {
    console.log(result);
});


// 2: Use await to get the returned value.

async function welcome() {
    return "Welcome Diljeet";
}

async function display() {
    let result = await welcome();
    console.log(result);
}

display();


// 3: Wait for a Promise using await.

let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});

async function getData() {
    let result = await promise1;
    console.log(result);
}

getData();


// 4: Print Start -> Data Loaded -> End.

let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 2000);
});

async function loadData() {
    console.log("Start");

    let result = await promise2;

    console.log(result);
    console.log("End");
}

loadData();


// 5: Handle errors using try...catch.

let promise3 = new Promise((resolve, reject) => {
    reject("Network Error");
});

async function fetchData() {

    try {

        let result = await promise3;
        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

fetchData();


// 6: Login example using async/await.

let loginPromise = new Promise((resolve) => {
    resolve("Login Successful");
});

async function login() {
    let result = await loginPromise;
    console.log(result);
}

login();


// 7: Student result using async/await.

let studentResult = new Promise((resolve) => {
    resolve("Pass");
});

async function checkResult() {
    let result = await studentResult;
    console.log(result);
}

checkResult();


// 8: Product order example.

let orderPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Order Confirmed");
    }, 1000);
});

async function orderProduct() {
    let result = await orderPromise;
    console.log(result);
}

orderProduct();


// 9: Payment example using try...catch.

let paymentPromise = new Promise((resolve, reject) => {
    reject("Payment Failed");
});

async function payment() {

    try {

        let result = await paymentPromise;
        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

payment();


// 10: Download file example.

let downloadPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("File Downloaded");
    }, 2000);
});

async function downloadFile() {
    let result = await downloadPromise;
    console.log(result);
}

downloadFile();