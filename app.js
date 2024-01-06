// app.js - Sample JavaScript for a microservices-based web application

document.addEventListener("DOMContentLoaded", function () {
    // DOM is ready, you can interact with the HTML elements here

    // Example: Fetch data from a microservice
    fetchDataFromMicroservice("user-service")
        .then(data => {
            // Process the data
            console.log("Data from user-service:", data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    // Example: Handle form submission
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Example: Send login credentials to authentication microservice
        authenticateUser(username, password)
            .then(response => {
                // Process the authentication response
                console.log("Authentication response:", response);
            })
            .catch(error => {
                console.error("Authentication error:", error);
            });
    });
});

// Example function to fetch data from a microservice
function fetchDataFromMicroservice(microserviceName) {
    return fetch(`http://microservices/${microserviceName}/data`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

// Example function to authenticate user with authentication microservice
function authenticateUser(username, password) {
    return fetch("http://microservices/authentication", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Authentication failed! Status: ${response.status}`);
        }
        return response.json();
    });
}
