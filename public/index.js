let currentScore = 0;
let userData = { username: null, highScore: 0 };
let colorChange = 60;
let randomButtonId;

document.addEventListener("DOMContentLoaded", async function () {
    const buttons = document.querySelectorAll("button");
    userArray();
    checkLoggedInUser();
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("userData.username", "userName");
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

async function checkLoggedInUser() {
    try {
        const response = await fetch('/api/user/me', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const user = await response.json();
            userData.username = user.uname; // Update the username in userData
            // You can also update the highScore here if needed
        } else {
            // Handle the case when the user is not logged in
            console.log("User is not logged in");
        }
    } catch (error) {
        console.error('Error checking logged in user:', error);
    }
}


async function loadUserHighScore() {
    let savedUserData = localStorage.getItem("userData");

    if (savedUserData && savedUserData !== "{}") {
        userData = JSON.parse(savedUserData);
        document.getElementById("loggedin").style.display = "none";
        fetchUserHighScoreFromServer(userData.username);
    } else {
        fetchUserHighScoreFromServer("Player2");
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


async function userArray() {
    try {
        const response = await fetch('http://localhost:4000/api/users');
        const userArray = await response;
        console.log(response);
        if (userArray.length > 0) {
            console.log(userArray)
        }
    } catch (error) {
        console.error('Error loading users:', error);
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

function updateScores(newScore, username) {
    let scores = JSON.parse(localStorage.getItem('scores') || '[]');
    scores.push({ username: username, score: newScore, date: new Date().toLocaleDateString() });
    scores.sort((a, b) => b.score - a.score);

    if (scores.length > 10) {
        scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
}

async function updateHighScores(newScore) {
    if (newScore > userData.highScore) {
        userData.highScore = newScore;
        localStorage.setItem("userData", JSON.stringify(userData));
        document.getElementById("count2").value = newScore;
    }

    await saveScore(newScore);
    await loadTopScore();
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
