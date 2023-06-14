/// <reference path="player.ts" />


function startGame() {
    // starting a new game

    let playerName: string | undefined  = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName)
    postScore(-5, playerName);
  }

  function logPlayer(name: string = "MultiMath Player"): void {
    console.log(`New game starting for player: ${name}`);
  }



  function postScore(score: number, playerName: string = "MultiMath Player"): void {
    let logger: (value: string) => void;

    if (score < 0) {
      logger = logError
    } else {
      logger = logMessage
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    if (scoreElement !== null) {
      scoreElement.innerText = `${score} - ${playerName}`;
    }

    logger(`Logged Score: ${score}`)
  }
  
  document.getElementById('startGame')!.addEventListener('click', startGame)

  const logMessage = (message : string) => console.log(message)

  function logError (err: string):void {
    console.log(err + " ERROR"); 
  }

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
