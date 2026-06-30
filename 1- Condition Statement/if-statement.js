//Using if...else statement
let i = 10;
if (i < 10) {
    console.log("i is less than 10");
}
if (i === 10) {
    console.log("i = 10")
}
else {
    console.log("i is greater than 10")
}


// 2: Using switch statement with break
let j =1 ;
switch (j) {
    case 1:
        console.log("i is 1");
       
    case 10:
        console.log("i is 10");
       break;
    case 20:
        console.log("i is 20");
       
    case 25:
        console.log("i is 25");
        
}

// 3: Check age using if...else if...else
let age = 18;
if(age > 18){
    console.log("U r above mature ")
}
else if(age===18){
    console.log("u r mature now")
}
else{
    console.log("u r  kid ")
}

// Example 4: Check whether a number is positive or negative
let i = -10;
if(i<0){
    console.log("this is negative")
}
else{
    console.log("this is positive")
}

let age = 18;
if(age<18){
    console.log("U r not eligble for vote")
}
else if(age===18){
    console.log("U r now eligble for vote")
}
else{
    console.log("Sure u r eligble for vote")
}