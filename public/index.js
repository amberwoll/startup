let currentScore = 0;
let userData = { username: null, highScore: 0 };
let colorChange = 60;
let randomButtonId;

document.addEventListener("DOMContentLoaded", async function () {
    const buttons = document.querySelectorAll("button");
    await updateUserAndStore();
    loadUserHighScore();
    await loadTopScore();
    startNewRound();

    buttons.forEach((button, id) => {
        button.addEventListener("click", function () {
            if ((id + 1) === randomButtonId) {
                currentScore++;
                if (colorChange > 1) {
                    colorChange--;
                }
                updateScores(currentScore, userData.username);
                if (currentScore > userData.highScore) {
                    updateHighScores(currentScore);
                }
                document.getElementById("count1").value = currentScore;
            } else {
                updateHighScores(currentScore);
                currentScore = 0;
                document.getElementById("count1").value = currentScore;
                colorChange = 60;
            }
            startNewRound();
        });
    });

    function startNewRound() {
        const { randomColor, modifiedColor } = getRandomColors();
        buttons.forEach((button) => {  
            button.style.backgroundColor = randomColor;
        });

        randomButtonId = (Math.floor(Math.random() * 4) + 1);
        const differentButton = document.getElementById(randomButtonId);
        differentButton.style.backgroundColor = modifiedColor;
    };
});



async function loadUserHighScore() {
    let savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
        savedUserData = JSON.parse(savedUserData);

        // Check if a user is logged in
        if (savedUserData.username) {
            userData = savedUserData;
            document.getElementById("loggedin").style.display = "none"; // Hide "loggedin" element
            fetchUserHighScoreFromServer(userData.username);
        } else {
            // No user is logged in
            document.getElementById("loggedin").style.display = "block"; // Show "loggedin" element
            userData.highScore = 0; // Reset high score
            document.getElementById("count2").value = 0; // Reset high score display
        }
    } else {
        // Handle the case when there's no userData in localStorage
        document.getElementById("loggedin").style.display = "block";
        userData.highScore = 0;
        document.getElementById("count2").value = 0;
    }
}




async function fetchUserHighScoreFromServer(username) {
    try {
        const response = await fetch(`http://localhost:4000/api/scores/highscore/${username}`);
        const topScore = await response.json();
        if (topScore && topScore?.score > userData.highScore) {
            userData.highScore = topScore.score;
            document.getElementById("count2").value = userData.highScore;
        }
        localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
        console.error('Error fetching user high score:', error);
    }
}

async function updateUserAndStore() {
    const currentUser = await fetchCurrentUser();
    if (currentUser) {
        userData.username = currentUser.uname; // Assuming the object has a property uname
        userData.highScore = 0; // Reset or update as needed
        localStorage.setItem("userData", JSON.stringify(userData));
    } else {
        console.log("No user is currently logged in.");
    }
}

async function fetchCurrentUser() {
    try {
        const response = await fetch('http://localhost:4000/api/user/me', {
            method: 'GET',
            credentials: 'include', // Necessary for cookies to be sent with the request
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data; // Return the username
        } else {
            console.log("User is not logged in or error occurred");
            return null; // User not logged in or error
        }
    } catch (error) {
        console.error('Error fetching current user:', error);
        return null;
    }
}


async function loadTopScore() {
    try {
        const response = await fetch('http://localhost:4000/api/scores');
        const scores = await response.json();
        if (scores && scores.length > 0) {
            const topScore = scores[0];
            document.getElementById("highestScorePlayer").textContent = topScore.username;
            document.getElementById("count3").value = topScore.score;
        }
    } catch (error) {
        console.error('Error loading top score:', error);
    }
}

async function saveScore(currentScore) {
    if (userData.username) {
        const newScore = { username: userData.username, score: currentScore, date: new Date().toLocaleDateString() };
        try {
            await fetch('http://localhost:4000/api/score', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newScore)
            });
            if (currentScore > userData.highScore) {
                userData.highScore = currentScore;
                localStorage.setItem("userData", JSON.stringify(userData));
                loadUserHighScore();
            }
        } catch (error) {
            console.error('Error saving score:', error);
        }
    }
}


function updateScores(newScore, username) {
    if (username) {
        let scores = JSON.parse(localStorage.getItem('scores') || '[]');
        scores.push({ username: username, score: newScore, date: new Date().toLocaleDateString() });
        scores.sort((a, b) => b.score - a.score);

        if (scores.length > 10) {
            scores.length = 10;
        }

        localStorage.setItem('scores', JSON.stringify(scores));
    }
}

async function updateHighScores(newScore) {
    if (userData.username && newScore > userData.highScore) {
        userData.highScore = newScore;
        localStorage.setItem("userData", JSON.stringify(userData));
        document.getElementById("count2").value = newScore;
        await saveScore(newScore);
        await loadTopScore();
    }
}


function getRandomColors() {
    const baseR = Math.floor(Math.random() * 256);
    const baseG = Math.floor(Math.random() * 256);
    const baseB = Math.floor(Math.random() * 256);

    const change = (Math.random() < 0.5 ? -1 : 1) * colorChange;

    const adjustColor = (color) => {
        return Math.min(255, Math.max(0, color + change));
    };

    const modifiedR = adjustColor(baseR);
    const modifiedG = adjustColor(baseG);
    const modifiedB = adjustColor(baseB);

    const randomColor = `rgb(${baseR},${baseG},${baseB})`;
    const modifiedColor = `rgb(${modifiedR},${modifiedG},${modifiedB})`;

    return { randomColor, modifiedColor };
}
