// 1: Create a simple counter application with increase, decrease, and reset buttons.
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let result = document.getElementById("result");

let count = 0;

result.innerText = count;

increase.addEventListener("click", function () {
    count++;
    result.innerText = count;
});

decrease.addEventListener("click", function () {
    count--;
    result.innerText = count;
});

reset.addEventListener("click", function () {
    count = 0;
    result.innerText = count;
});