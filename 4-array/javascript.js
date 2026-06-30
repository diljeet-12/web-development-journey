// 1: Create an array, update an element, and display its length.
let nums = [10,20,30];
// console.log(nums)
// console.log(nums[2])
nums[1] = 50 ;
console.log(nums.length)



// 2: Access and display array elements and its length.
let arr = [5,15,25]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.length)



// 3: Create a function to check whether a number is even or odd.
function oddeven(num){
    
    return num % 2 === 0 ? "even" : "odd";
}

// 4: Check whether each number in an array is even or odd.
let nums = [2,7,10,13]
for (let i = 0; i < nums.length ; i++){
      let result = oddeven(nums[i]);
    console.log(nums[i] + "->" +result);
}

// 5: Calculate and display the sum of all array elements.
let nums = [2,7,10,13]
let sum = 0 

for (let i = 0; i < nums.length ; i++){
      sum += nums[i];
    
}
console.log(sum);

// 6: Find and display the largest number in an array.
let nums = [2,7,10,13]
let max = nums[0]

for (let i = 0; i < nums.length ; i++){
      if(nums[i] > max){
        max = nums[i]
      }
    
}
console.log(max);

// 7: Print all elements of an array.
let nums = [5, 8, 2, 10, 7];
for(let i=0;i < nums.length;i++){
  console.log(nums[i])
}
// 8: Calculate and display the sum of all array elements.
let num = [5, 8, 2, 10, 7];
let sum = 0;
for(let i=0;i < num.length;i++){
  sum=sum+num[i];
}
console.log("sum = " + sum )

// 9: Check whether each number in an array is even or odd.
function oddeven(num){
  return num % 2 ===0 ? "even":"odd";
}
let num1 = [5, 8, 2, 10, 7];

for (let i = 0; i < num1.length; i++) {
    let result = oddeven(num1[i]); 
    console.log(num1[i] + " -> " + result);
}