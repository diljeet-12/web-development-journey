// 1. Read Input Values
// Used to get the values entered by the user.

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {

    // 2. Prevent Form Refresh
    // Used to stop the page from refreshing after form submission.

    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let result = document.getElementById("result");

    // 3. Validation
    // Used to check whether the user has entered valid input.

    if (name.value === "" || email.value === "") {

        result.innerText = "Please fill in all fields.";

    } else {

        result.innerText =
            "Welcome " + name.value + " (" + email.value + ")";

    }

});