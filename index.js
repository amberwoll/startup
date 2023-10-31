document.addEventListener("DOMContentLoaded", function () {
    let currentScore = 0;
    let round = 1;
    const buttons = document.querySelectorAll("button");
    let colorChange = 60;
    let randomButtonId;
    let highScore = 0; 
    const savedUserData = localStorage.getItem("userData");

    if (savedUserData) {
        let userData = JSON.parse(savedUserData);
        // let username = userData.username;
        if (userData.hasOwnProperty("highScore")) {
            highScore = userData.highScore;
        }
        document.getElementById("count2").value = highScore;
        document.getElementById("loggedin").value = '';

    } else {
        document.getElementById("count2").value = 0;
        document.getElementById("loggedin").value = 'Log in to save your scores and make it on the leaderboard!';
    }


    function getRandomColors() {
        const baseR = Math.floor(Math.random() * 256);
        const baseG = Math.floor(Math.random() * 256);
        const baseB = Math.floor(Math.random() * 256);

        const modifiedR = baseR + colorChange;
        const modifiedG = baseG + colorChange;
        const modifiedB = baseB + colorChange;

        const randomColor = `rgb(${baseR},${baseG},${baseB})`;
        const modifiedColor = `rgb(${modifiedR},${modifiedG},${modifiedB})`;

        return { randomColor, modifiedColor };
    }

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

    buttons.forEach((button, id) => {
        button.addEventListener("click", function () {
            if ((id + 1) === randomButtonId) {
                currentScore++;
                if (colorChange > 1) {
                    colorChange--;
                }
                document.getElementById("count1").value = currentScore;
                if (currentScore > highScore) {
                    highScore = currentScore;
                    localStorage.setItem("highScore", highScore);
                    document.getElementById("count2").value = highScore;
                }
            } else {
                currentScore = 0;
                colorChange = 40;
            }
            document.getElementById("count1").value = currentScore;
            startNewRound();
        });
    });

    startNewRound();
});
