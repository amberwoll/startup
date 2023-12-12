function updateLeaderboard() {
    const leaderboardTable = document.getElementById("leaderboard-table").getElementsByTagName('tbody')[0];
    leaderboardTable.innerHTML = ''; 

    const userScores = Object.entries(users).map(([name, score]) => ({ name, score }));

    userScores.sort((a, b) => b.score - a.score);

    userScores.forEach((entry, index) => {
        const row = leaderboardTable.insertRow(index);
        const nameCell = row.insertCell(0);
        const scoreCell = row.insertCell(1);
        const dateCell = row.insertCell(2);
        nameCell.textContent = entry.name;
        scoreCell.textContent = entry.score;
        dateCell.textContent = formatScoreDate(entry.date);
    });


function updateUserScore(username, score) {
    if (!users[username] || score > users[username]) {
        users[username] = score;
        updateLeaderboard();
        }
    }
updateLeaderboard();

};