let currentScore = 0;
let currentDate = new Date().toLocaleDateString();
let round = 1;
let colorChange = 60;
let randomButtonId;
let userData = { username: "Player2", highScore: 0 };
let scores = [];

async function loadScores() {
    try {
      // Get the latest high scores from the service
      const response = await fetch('http://localhost:4000/api/scores');
      scores = await response.json();
      if (scores == []) {
        updateHighestScoreDisplay()
      }
      // Save the scores in case we go offline in the future
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just use the last saved scores
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    }
  }

// async function updateUserScore(username, score) {
//     try {
//         const response = await fetch('/api/score', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: username, score: score })
//         });

//         if (response.ok) {
//             loadScores();
//         }
//     } catch (error) {
//         console.error('Error updating user score:', error);
//     }
// }

async function pushScoresToServer() {
    try {
        const response = await fetch('/api/scores/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(scores)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Scores successfully updated on the server.");
    } catch (error) {
        console.error('Error pushing scores to server:', error);
    }
}

// async function submitScore(currentScore) {
//     const username = 'Player';

//     try {
//         await fetch('/api/score', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: username, score: currentScore })
//         });
//         loadScores();
//     } catch (error) {
//         console.error('Error submitting score:', error);
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const savedUserData = localStorage.getItem("userData");
    loadScores();
    startNewRound();
    
    
    if (savedUserData) {
        let userData = JSON.parse(savedUserData);
        let username = userData.username;
        if (userData.hasOwnProperty("highScore")) {
            insertCurrentPlayerHighScore(userData.highScore, username);
            updateHighestScoreDisplay()
        }
        document.getElementById("count2").value = userData.highScore;
        document.getElementById("loggedin").value = '';

    } else {
        document.getElementById("count2").value = 0;
        document.getElementById("loggedin").value = 'Log in to save your scores and make it on the leaderboard!';
    }

    updateHighestScoreDisplay();

    function startNewRound() {
        const { randomColor, modifiedColor } = getRandomColors();
    
        buttons.forEach((button) => {  
            button.style.backgroundColor = randomColor;
        });
    
        randomButtonId = (Math.floor(Math.random() * 4) + 1);
        const differentButton = document.getElementById(randomButtonId);
        differentButton.style.backgroundColor = modifiedColor;
    
        round++;
    }

    function updateScores(newScore, username) {
        scores.push({ score: newScore, username: username, date: currentDate });
    
        scores.sort((a, b) => b.score - a.score);
    
        if (scores.length > 10) {
            scores.length = 10;
        }
    
        localStorage.setItem("scores", JSON.stringify(scores));
        updateHighestScoreDisplay();
    }

    function resetScores() {
        scores = [];
        localStorage.setItem("scores", JSON.stringify(scores)); 
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

    function insertCurrentPlayerHighScore(highScore, username) {
        let userHighScore = scores.find(s => s.username === username);
        if (!userHighScore) {
            scores.push({ score: highScore, username: username, date: currentDate });
            scores.sort((a, b) => b.score - a.score);
            
            if (scores.length > 10) {
                scores.length = 10;
            }
    
            localStorage.setItem("scores", JSON.stringify(scores));
        }
    }

    buttons.forEach((button, id) => {
        button.addEventListener("click", function () {
            if ((id + 1) === randomButtonId) {
                currentScore++;
                if (colorChange > 1) {
                    colorChange--;
                }
                document.getElementById("count1").value = currentScore;
                let userHighScore = scores.find(s => s.username === userData.username);
                if (!userHighScore || currentScore > userHighScore.score) {
                    if (userHighScore) {
                        userHighScore.score = currentScore;
                    }
                    updateScores(currentScore, userData.username);

                    if (currentScore > userData.highScore) {
                        userData.highScore = currentScore;
                        localStorage.setItem("userData", JSON.stringify(userData));
                        document.getElementById("count2").value = userData.highScore;
                    }
            }
            } else {
                currentScore = 0;
                colorChange = 60;
            }
            document.getElementById("count1").value = currentScore;
            startNewRound();
        });
    });

    startNewRound();
});

function updateHighestScoreDisplay() {
    if (scores.length > 0) {
        let highestScoreEntry = scores[0];
        document.getElementById("highestScorePlayer").textContent = highestScoreEntry.username;
        document.getElementById("count3").value = highestScoreEntry.score;
    }
}