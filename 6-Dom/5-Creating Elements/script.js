// 1. createElement()
// Used to create a new HTML element.

let createBtn = document.getElementById("createBtn");
let container = document.getElementById("container");

createBtn.addEventListener("click", function () {

    let para = document.createElement("p");
    para.innerText = "This paragraph was created using JavaScript.";

    // 2. appendChild()
    // Used to add a new element inside another element.

    container.appendChild(para);

});


// 3. remove()
// Used to remove an existing HTML element.

let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function () {

    let paragraph = document.querySelector("#container p");

    if (paragraph) {
        paragraph.remove();
    }

});


// 4. replaceChild()
// Used to replace one child element with another.

let replaceBtn = document.getElementById("replaceBtn");

replaceBtn.addEventListener("click", function () {

    let oldParagraph = document.querySelector("#container p");

    if (oldParagraph) {

        let newHeading = document.createElement("h2");
        newHeading.innerText = "This element replaced the paragraph.";

        container.replaceChild(newHeading, oldParagraph);
    }

});