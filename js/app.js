"use strict";
class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
function startGame() {
    let playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name = "MultiMath Player") {
    console.log(`New game starting for player: ${name}`);
}
function getInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName = "MultiMath Player") {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.getElementById('postedScores');
    if (scoreElement !== null) {
        scoreElement.innerText = `${score} - ${playerName}`;
    }
    logger(`Logged Score: ${score}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
const logMessage = (message) => console.log(message);
function logError(err) {
    console.log(err + " ERROR");
}
const firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map