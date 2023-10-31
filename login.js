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

        console.log(`users: ${JSON.stringify(users)}`);
        console.log(`password: ${password}`);
        console.log(`username: ${username}`);
        console.log(`registration mode: ${registrationMode}`);
        console.log(`login button text: ${loginButton.textContent}`);

        if (registrationMode) {
            if (!users[username]) {
                console.log('option 1.1');
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
                console.log('option 1.2');
                alert("Username already exists. Choose a different username or login.");
                loginButton.textContent = "Login";
            }
        } else {
            console.log('option 2');
            if (users[username] && users[username].password === password) {
                console.log('option 2.1');
                alert("Login successful.");
                userData = {
                    username: username,
                    highScore: users[username].highScore,
                };
            } else {
                console.log('option 2.2');
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
