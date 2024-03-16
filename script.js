const divRock = document.querySelector('#rock')
const divPaper = document.querySelector('#paper')
const divScissors = document.querySelector('#scissors')
const playerChoiceImg = document.querySelector('#player_choice > .card-img')
const computerChoiceImg = document.querySelector('#computer_choice > .card-img')

const results = document.querySelector('#results')
const summary = document.querySelector('#summary')
const score = document.querySelector('#score')



const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

let availableItems = [ROCK, PAPER, SCISSORS]

const ROCK_IMG_PATH = "img/rocks.png"
const PAPER_IMG_PATH = "img/paper-plane.png"
const SCISSORS_IMG_PATH = "img/cutting.png"

const STATUS_FINISHED = "finished"
const COMPUTER_WINS = "Computer wins!"
const PLAYER_WINS = "Player wins!"
const DRAW_RESULT = "It's a draw!"


const DRAW = "draw"
const COMPUTER = "computer"
const PLAYER = "player"

let gameStatus = "playing"
let playerScore = 0
let computerScore = 0
const WIN_SCORE = 3

divRock.addEventListener('click', playRock)
divPaper.addEventListener('click', playPaper)
divScissors.addEventListener('click', playScissors)

function playRock() {
    play(ROCK);
}

function playPaper() {
    play(PAPER);
}

function playScissors() {
    play(SCISSORS);
}

function play(playerChoice) {
    if(gameStatus == STATUS_FINISHED) {
        return
    }
    console.log("gameStatus " + gameStatus)
    let computerChoice = getComputerChoice()
    
    setChoiceForImg(playerChoice, playerChoiceImg)
    setChoiceForImg(computerChoice, computerChoiceImg)

    handleRoundResult(playRound(playerChoice, computerChoice))


}

function setChoiceForImg(choice, img) {
    switch (choice) {
        case ROCK:
            img.setAttribute("src", ROCK_IMG_PATH)
            break;
        case PAPER:
            img.setAttribute("src", PAPER_IMG_PATH)
            break;
        case SCISSORS:
            img.setAttribute("src", SCISSORS_IMG_PATH)
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return availableItems[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
    console.log("Playerselection = " + playerSelection + ", computer = " + computerSelection)
    if (playerSelection == computerSelection) {
        return DRAW
    }
    if(playerSelection == ROCK) {
        return computerSelection == PAPER ? COMPUTER : PLAYER
    }
    if(playerSelection == PAPER) {
        return computerSelection == SCISSORS ? COMPUTER : PLAYER
    }
    if(playerSelection == SCISSORS) {
        return computerSelection == ROCK ? COMPUTER : PLAYER
    }
}

function handleRoundResult(roundResult) {
    switch(roundResult) {
        case DRAW:
            printDraw()
            return
        case COMPUTER:
            printComputerWins()
            computerScore++
            break
        case PLAYER:
            printPlayerWins()
            playerScore++
            break
    }
    checkScore()
}

function printDraw() {
    printResult(DRAW_RESULT)
}
function printComputerWins() {
    printResult(COMPUTER_WINS)
}
function printPlayerWins() {
    printResult(PLAYER_WINS)
}

function printResult(resultText) {
    results.textContent = resultText
}

function checkScore() {
    score.textContent = "Score: You - " + playerScore + ", Computer - " + computerScore
    if (computerScore >= WIN_SCORE || playerScore >= WIN_SCORE) {
        gameStatus = STATUS_FINISHED
        summary.textContent = computerScore >= WIN_SCORE ? COMPUTER_WINS : PLAYER_WINS
    }
}




// let cards = document.querySelectorAll('div.card')
// console.dir(cards)
// cards.forEach(card => {
//     console.log("add event")
//     console.log(card)
//     card.addEventListener('mouseenter', cardMouseOver)
//     card.addEventListener('mouseleave', cardMouseOut)
// });

// function cardMouseOver(e) {
//     e.currentTarget.style.backgroundColor = 'gray';
    
// }

// function cardMouseOut(e) {
//     e.currentTarget.style.backgroundColor = 'white';
// }

// let availableItems = ["rock", "paper", "scissors"]
// const COMPUTER_WINS = "Computer wins!"
// const PLAYER_WINS = "Player wins!"


// playGame()


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function getComputerChoice() {
//     return availableItems[getRandomInt(3)];
// }


// function getPlayerSelection () {
//     let choice = prompt("Rock/Paper/Scissors?", "")
//     console.log(choice)
//     if(choice == null || choice == "") {
//         choice = getComputerChoice()
//         console.warn("Ничего не выбрано - добавляем рандомный выбор для игрока " + choice )
        
//     }
//     return choice.toLocaleLowerCase()
// }


//  function playGame() {
//     let counter = 0
//     let computerResult = 0;
//     let playerResult = 0;
//     while ( counter < 5 ) {

//         result = playRound(getPlayerSelection(), getComputerChoice())
//         switch (result) {
//             case COMPUTER_WINS:
//                 computerResult++
//                 break;
        
//             default:
//                 playerResult++
//                 break;
//         }
//         counter++
//     }
//     console.log("Computer wins " + computerResult + " times")
//     console.log("Player wins " + playerResult + " times")
//     if(computerResult > playerResult) {
//         console.log(COMPUTER_WINS)
//     } else if (playerResult > computerResult) {
//         console.log(PLAYER_WINS)
//     } else {
//         console.log("draw")
//     }
     
//  }


