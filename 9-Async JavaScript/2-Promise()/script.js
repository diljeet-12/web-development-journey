// 2. Promise
// A Promise is an object that represents the eventual completion
// or failure of an asynchronous operation.


// 1: Create a Promise and resolve it.

let promise1 = new Promise((resolve, reject) => {
    resolve("Data Loaded");
});

promise1.then((result) => {
    console.log(result);
});


// 2: Create a Promise and reject it.

let promise2 = new Promise((resolve, reject) => {
    reject("Network Error");
});

promise2.catch((error) => {
    console.log(error);
});


// 3: Use resolve() with then().

let promise3 = new Promise((resolve, reject) => {
    resolve("Login Successful");
});

promise3.then((result) => {
    console.log(result);
});


// 4: Use reject() with catch().

let promise4 = new Promise((resolve, reject) => {
    reject("Invalid Password");
});

promise4.catch((error) => {
    console.log(error);
});


// 5: Use if...else inside a Promise.

let success = true;

let promise5 = new Promise((resolve, reject) => {

    if (success) {
        resolve("Payment Successful");
    } else {
        reject("Payment Failed");
    }

});

promise5
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


// 6: Execute finally() after a successful Promise.

let promise6 = new Promise((resolve, reject) => {
    resolve("Order Placed");
});

promise6
.then((result) => {
    console.log(result);
})
.finally(() => {
    console.log("Process Completed");
});


// 7: Execute finally() after a rejected Promise.

let promise7 = new Promise((resolve, reject) => {
    reject("Server Error");
});

promise7
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Process Completed");
});


// 8: Login example using Promise.

let isLoggedIn = false;

let promise8 = new Promise((resolve, reject) => {

    if (isLoggedIn) {
        resolve("Welcome Diljeet");
    } else {
        reject("Login Failed");
    }

});

promise8
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


// 9: Check marks using Promise.

let marks = 85;

let promise9 = new Promise((resolve, reject) => {

    if (marks >= 40) {
        resolve("Pass");
    } else {
        reject("Fail");
    }

});

promise9
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


// 10: Download file using Promise.

let fileDownloaded = true;

let promise10 = new Promise((resolve, reject) => {

    if (fileDownloaded) {
        resolve("File Downloaded");
    } else {
        reject("Download Failed");
    }

});

promise10
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Download Process Finished");
});