//1: Print numbers from 2 to 9 using a for loop
for (let i = 2; i < 10; i++) {
    console.log(i);
}

//  2: Print the multiplication table of 7
let x = 7;
for (let i = 1; i <= 10; i++) {
    console.log(x + " x " + i + " = " + (x * i));
}

// Example 3: Print the multiplication table of 12
let y=12;
for(let i =1;i<=10;i++){
    console.log(y+"x"+i+"="+(y*i))
}


// Example 4: Print numbers from 1 to 10 using a while loop
let c = 1;
while (c <=10) {
    console.log(c);
    c++;
}

// Example 5: Print numbers from 1 to 10 using a do...while loop
let d = 1;
do {
    console.log(d);
    d++;
} while (d <= 10);  

// Example 6: Lucky Number Guessing Game
let luckyno=12;
for ( let x = 1; x<=3 ;x++ ){
    
    let guessno = Number(prompt("Guess lucky number:"));
    if ( guessno=== luckyno ){
        alert("correct ur lucky number is 12")
        break;
    }
    else if ( guessno > luckyno ){
        alert("reduce the number")
    }
    else  {
        alert("increase the number")
    }

    if (x === 3) {
        alert("Game Over");
    }
}

// Example 7: Login System (3 Attempts)
let username= "diljeet";
let password= "diljeet12";
for ( let x = 1; x<=3 ;x++ ){
    
    let inputuser = (prompt("enter ur username"));
    let inputpass = (prompt("enter ur Password"));
       if (inputuser === username && inputpass === password) {
        alert("Login successful");
        break;
    } 
    else {
        alert("Wrong username or password");
    }

    if (x === 3) {
        alert("sorry");
    }
}

// Example 8: Login System Using continue Statement (Practice)
let username = "diljeet"
let Password = "diljeet12"
for ( let x=0;x<=1;x++){
    let userinput = prompt("Enter your username")
     if (userinput !== username){
        alert("username is wrong")
        continue;

    let passinput = prompt("Enter your password")
    if (userinput === username && passinput===Password){
        alert("Logged In")
        break;
    }
    
    else if (passinput!==Password){
        alert("Passwor is wrong")
    }

    if (x===1){
        alert("Sorry")
    }
}
}


// Example 9: Login System Using User Input Comparison
let username = "diljeet";
let userpass = "diljeet12";
for(let i=1;i<=3;i++){
    let username = (prompt("Enter username: "));
    let userpass = (prompt("Enter userpass: "));
    if (username==="diljeet" && userpass==="diljeet12"){
        alert("Successfull login")
        break;
    }
    
    else {
        alert("username or password is incorrect")
    }
    if(i=== 3){
        alert("You r not eligible")
    }
}

