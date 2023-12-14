async function loadScores() {
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/scores');
      scores = await response.json();
        
      // Save the scores in case we go offline in the future
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just use the last saved scores
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
    }
  
    updateLeaderboard(scores);
  }

  function updateLeaderboard(scores) {
    const leaderboardTable = document.getElementById("leaderboard-table").getElementsByTagName('tbody')[0];
    leaderboardTable.innerHTML = ''; 

    scores.forEach((entry, index) => {
        const row = leaderboardTable.insertRow(index);
        const nameCell = row.insertCell(0);
        const scoreCell = row.insertCell(1);
        const dateCell = row.insertCell(2);
        nameCell.textContent = entry.username;
        scoreCell.textContent = entry.score;
        dateCell.textContent = entry.date;
    });
}


async function updateUserScore(username, score) {
    try {
        const response = await fetch('/api/score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: username, score: score })
        });

        if (response.ok) {
            loadScores();
        }
    } catch (error) {
        console.error('Error updating user score:', error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadScores();
});

