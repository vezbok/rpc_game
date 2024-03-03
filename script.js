let availableItems = ["rock", "paper", "scissors"]
const COMPUTER_WINS = "Computer wins!"
const PLAYER_WINS = "Player wins!"


playGame()


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return availableItems[getRandomInt(3)];
}


function getPlayerSelection () {
    let choice = prompt("Rock/Paper/Scissors?", "")
    console.log(choice)
    if(choice == null || choice == "") {
        choice = getComputerChoice()
        console.warn("Ничего не выбрано - добавляем рандомный выбор для игрока " + choice )
        
    }
    return choice.toLocaleLowerCase()
}


 function playGame() {
    let counter = 0
    let computerResult = 0;
    let playerResult = 0;
    while ( counter < 5 ) {

        result = playRound(getPlayerSelection(), getComputerChoice())
        switch (result) {
            case COMPUTER_WINS:
                computerResult++
                break;
        
            default:
                playerResult++
                break;
        }
        counter++
    }
    console.log("Computer wins " + computerResult + " times")
    console.log("Player wins " + playerResult + " times")
    if(computerResult > playerResult) {
        console.log(COMPUTER_WINS)
    } else if (playerResult > computerResult) {
        console.log(PLAYER_WINS)
    } else {
        console.log("draw")
    }
     
 }

function playRound(playerSelection, computerSelection) {
    // your code here!
    console.log("Playerselection = " + playerSelection + ", computer = " + computerSelection)
    if (playerSelection == computerSelection) {
        return "draw"
    }
    if(playerSelection == "rock") {
        return computerSelection == "paper" ? COMPUTER_WINS : PLAYER_WINS
    }
    if(playerSelection == "paper") {
        return computerSelection == "scissors" ? COMPUTER_WINS : PLAYER_WINS
    }
    if(playerSelection == "scissors") {
        return computerSelection == "rock" ? COMPUTER_WINS : PLAYER_WINS
    }
  }
