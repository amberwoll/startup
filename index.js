document.addEventListener("DOMContentLoaded", function () {
    let currentScore = 0;
    let round = 1;
    let correctButtonIndex;
    const buttons = document.querySelectorAll("button");
    let colorChange = 40;
    let randomButtonId; 
    let savedHighScore = localStorage.getItem("highScore");

    if (savedHighScore !== null) {
        document.getElementById("count2").value = savedHighScore;
    } else {
        document.getElementById("count2").value = 0;
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
        console.log('random id 1')
        console.log(randomButtonId);
        const differentButton = document.getElementById(randomButtonId);
        differentButton.style.backgroundColor = modifiedColor;
        console.log('colors')
        console.log(randomColor)
        console.log(modifiedColor)

        round++;
    }

    buttons.forEach((button, id) => {
        button.addEventListener("click", function () {
            console.log('id')
            console.log(id)
            console.log('random id 2')
            console.log(randomButtonId);
            console.log('color change one')
            console.log(colorChange);
            if ((id + 1) === randomButtonId) {
                currentScore++;
                if (colorChange > 1) {
                    colorChange--;
                }
                document.getElementById("count1").value = currentScore;
                if (currentScore > savedHighScore) {
                    savedHighScore = currentScore;
                    localStorage.setItem("highScore", savedHighScore);
                    document.getElementById("count2").value = savedHighScore;
                }
            } else {
                currentScore = 0;
                colorChange = 40;
            }
            console.log('color change 2')
            console.log(colorChange);
            console.log('current score')
            console.log(currentScore);
            document.getElementById("count1").value = currentScore;
            startNewRound();
        });
    });

    startNewRound();
});
