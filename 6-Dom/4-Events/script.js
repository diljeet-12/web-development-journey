// 1. click
// Used to perform an action when a user clicks an element.

let clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function () {
    alert("Button Clicked");
});


// 2. dblclick
// Used to perform an action when a user double-clicks an element.

let dblBtn = document.getElementById("dblBtn");

dblBtn.addEventListener("dblclick", function () {
    alert("Button Double Clicked");
});


// 3. mouseover
// Used to detect when the mouse pointer enters an element.

let box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "yellow";
});


// 4. mouseout
// Used to detect when the mouse pointer leaves an element.

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "lightblue";
});


// 5. keydown
// Used to detect when a keyboard key is pressed.

let input = document.getElementById("name");

input.addEventListener("keydown", function () {
    console.log("Key Pressed");
});


// 6. keyup
// Used to detect when a keyboard key is released.

input.addEventListener("keyup", function () {
    console.log(input.value);
});


// 7. submit
// Used to perform an action when a form is submitted.

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form Submitted");
});


// 8. input
// Used to detect changes while the user is typing in an input field.

input.addEventListener("input", function () {
    console.log(input.value);
});


// 9. change
// Used to detect changes after the user finishes editing an input field.

let city = document.getElementById("city");

city.addEventListener("change", function () {
    alert(city.value);
});