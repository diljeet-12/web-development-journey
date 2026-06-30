// 1: Check whether a number is even and return true or false.
function oddeven(num){
    if (num % 2 === 0 ){
        return true
    }
    else{
        return false
    }
}
let result = oddeven(9)
alert("result is "+ result)

// 2: Check whether a number is even or odd using a ternary operator.
function oddeven(num){
    
    return num % 2 === 0 ? "even" : "odd";
}

let input = Number(prompt("Enter a number"))
if (isNaN(input)) {
    alert("Invalid input");
}

else {
    alert("Valid number");
    let result = oddeven(input);
    alert("result is "+ result)
}

// 3: Print a greeting message to the console.
function greet(){
    console.log("hello, Dhan Dhan Satguru Tera Hi Asra")
}
greet()

// 4: Add two numbers and display the result in the console.
function oddeven(num) {
function add(a,b){
    console.log(a+b)
}
add(8,10)

}
// 5: Check whether a number is even or odd and print the result.
function oddeven(num) {
    if (num % 2 === 0) {
        console.log("this is even");
    } else {
        console.log("this is odd");
    }
}

oddeven(7);