// 1: Create an object, update its properties, and access values.
let mobile = {
    
    brand : "Samsung",
    price : 25000,
    color : "Black"
} 
mobile.price=22000;
mobile.owner="Diljeet";
console.log(mobile.brand)
console.log(mobile.owner)
console.log(mobile["price"])

// 2: Add, update, and delete object properties, then display the object.
let mobile = {
    brand : "Samsung",
    price : 25000,
    color : "Black"
} 
mobile.price=22000;
mobile.owner="Diljeet";
delete mobile.color;
// console.log(mobile.brand)
// console.log(mobile.owner)
// console.log(mobile["price"])
console.log(mobile)




// Part 2: Objects Inside an Array

let students =[
    {name:"Diljeet"},
    {name:"Supan"},
    {name:"Sahaj"}
]
for (let i = 0;i < students.length;i++){
    console.log(students[i].name)
}



