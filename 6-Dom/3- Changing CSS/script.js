// 1. Select Elements

let heading = document.getElementById("heading");

let styleBtn = document.getElementById("styleBtn");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let toggleBtn = document.getElementById("toggleBtn");


// 2. Change CSS using style

styleBtn.addEventListener("click", function () {

    heading.style.color = "blue";
    heading.style.backgroundColor = "yellow";
    heading.style.fontSize = "35px";

});


// 3. Add CSS class

addBtn.addEventListener("click", function () {

    heading.classList.add("red");
    heading.classList.add("big");

});


// 4. Remove CSS class

removeBtn.addEventListener("click", function () {

    heading.classList.remove("red");
    heading.classList.remove("big");

});


// 5. Toggle Dark Mode

toggleBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});