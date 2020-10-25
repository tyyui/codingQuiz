const scoreChart = document.getElementById ("scoreChart");
var index = 0;

function renderHighScores() {
renderHighScores();

    var storedHighscores = JSON.parse(localStorage.getItem("finalScore"));
function renderHighScores() {
    var finalScore = JSON.parse(window.localStorage.getItem("finalScore")) || [];

    // sort highscores by score property in descending order
    if (storedHighscores.length>=2) {
        storedHighscores.sort(function(a, b) {
    if (finalScore.length>=2) {
        finalScore.sort(function(a, b) {
            return b.score - a.score;
        })
    };

    for (i=0; i<storedHighscores.length; i++) {
        index++;
        // create li tag for each high score
        var row = scoreChart.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = index;
        cell2.innerHTML = storedHighscores[index-1].initials;
        cell3.innerHTML = storedHighscores[index-1].score;
    };

    console.log(storedHighscores);
}
    if (finalScore.length !== null) {
        for (i=0; i<finalScore.length; i++) {
            index++;
            // create li tag for each high score
            var row = scoreChart.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = index;
            cell2.innerHTML = finalScore[i].initials;
            cell3.innerHTML = finalScore[i].score;
        };

    }
};

function printScores() {
    window.localStorage.getItem("finalScore", JSON.parse(finalScore));
}
    
function clearScores() {
    window.localStorage.removeItem("finalScore");
    window.location.reload();
}

document.getElementById("clear").onclick = clearScores;

renderHighScores(); 
document.getElementById("clear").onclick = clearScores; 