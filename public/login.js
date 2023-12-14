document.addEventListener("DOMContentLoaded", function () {
    let users = {};
    let loginButton = document.getElementById("loginButton");
    let registrationMode = false;

    loginButton.addEventListener("click", function () {
        registrationMode = !registrationMode;
        loginButton.textContent = registrationMode ? "Login" : "Register";
    });
    let userData = {};

    document.getElementById("login").addEventListener("submit", function (e) {
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (registrationMode) {
            if (!users[username]) {
                users[username] = {
                    password: password,
                    highScore: 0,
                };
                alert("User registered successfully.");
                userData = {
                    username: username,
                    highScore: users[username].highScore,
                };
            } else {
                alert("Username already exists. Choose a different username or login.");
                loginButton.textContent = "Login";
            }
        } else {
            if (users[username] && users[username].password === password) {
                alert("Login successful.");
                userData = {
                    username: username,
                    highScore: users[username].highScore,
                };
            } else {
                alert("Login failed. Check your username and password.");
            }
        }
    });

    const savedUserData = localStorage.getItem("userData");
    localStorage.setItem("userData", JSON.stringify(userData));
    if (savedUserData) {
        const parsedUserData = JSON.parse(savedUserData);
        for (const username in parsedUserData) {
            users[username] = parsedUserData[username];
        }
    }
});
