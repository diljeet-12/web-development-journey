// 4. Fetch API
// The Fetch API is used to request data from a server.
// fetch() returns a Promise.


// 1: Fetch all users.

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});


// 2: Fetch all posts.

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});


// 3: Fetch a single user using async/await.

async function getUser() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getUser();


// 4: Fetch all comments.

async function getComments() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/comments");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getComments();


// 5: Fetch all albums.

async function getAlbums() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/albums");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getAlbums();


// 6: Fetch all todos.

async function getTodos() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/todos");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getTodos();


// 7: Fetch all photos.

async function getPhotos() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/photos");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getPhotos();


// 8: Fetch a single post.

async function getPost() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getPost();


// 9: Send data using POST request.

fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        title: "JavaScript",

        body: "Learning Fetch API",

        userId: 1

    })

})
.then((response) => response.json())
.then((data) => {

    console.log(data);

})
.catch((error) => {

    console.log(error);

});


// 10: Fetch posts and print them.

async function getPosts() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getPosts();