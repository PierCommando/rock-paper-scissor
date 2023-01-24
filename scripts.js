function playerChoseRock (event) {
    console.log('clicked Rock')
    playRound('Rock', getComputerChoice())
}

function playerChosePaper (event) {
    console.log('clicked Paper')
    playRound('Paper', getComputerChoice())
}

function playerChoseScissor (event) {
    console.log('clicked Scissor')
    playRound('Scissor', getComputerChoice())
}

let userScore = 0
let computerScore = 0

const btnRock = document.getElementById('rock');
btnRock.addEventListener('click', playerChoseRock);

const btnPaper= document.getElementById('paper');
btnPaper.addEventListener('click', playerChosePaper);

const btnScissor = document.getElementById('scissor');
btnScissor.addEventListener('click', playerChoseScissor);

const results = document.getElementById('result');
const userScoreDiv = document.getElementById('userScore')
const computerScoreDiv = document.getElementById('computerScore')





function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        computerChoice = "Rock"
    } else if (computerChoice === 1){
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissor"
    }
    console.log(computerChoice)
    return computerChoice
}

function checkScore() {
    userScoreDiv.textContent = userScore
    computerScoreDiv.textContent = computerScore
    if (userScore === 5 || computerScore === 5) {
        console.log('Game ended')
        btnRock.disabled = true
        btnPaper.disabled = true
        btnScissor.disabled = true
        let end
        if (userScore > computerScore) {
            end = "You Win"
        } else if (computerScore > playerScore) {
            end = "You Lose"
        } else {
            end = "It's a Draw"
        }
        console.log(`${end} with a score of ${userScore} to ${computerScore}.`)
    }
}

// function getPlayerChoice() {
//     let playerChoice 
//     while(true) {
//         playerChoice = prompt("Choose Rock - Paper - Scissor: ");
//         playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
//         if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissor") {
//             console.log(playerChoice)
//             return playerChoice
//         } else {
//             console.log(playerChoice)
//             alert("This choice is not supported!");
//         }

//     }
// }

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Scissor" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissor" && computerChoice === "Paper") {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
        results.textContent = `You Win! ${playerChoice} beats ${computerChoice}`
        userScore = userScore + 1
        console.log(userScore, computerScore)
        checkScore()
    } else if (playerChoice === "Rock" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Scissor" || playerChoice === "Scissor" && computerChoice === "Rock") {
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
        results.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`
        computerScore = computerScore + 1
        console.log(userScore, computerScore)
        checkScore()
    } else {
        console.log(`It's a Draw! You both chose ${playerChoice}`)
        results.textContent = `It's a Draw! You both chose ${playerChoice}`
        console.log(userScore, computerScore)
        checkScore()
    }
}

// function game() {
//     var playerScore = 0
//     var computerScore = 0
//     for (let i = 0; i < 5; i++) {
//         const playerChoice = getPlayerChoice()
//         const computerChoice = getComputerChoice()
//         const result = playRound(playerChoice, computerChoice)
//         if (result.includes("Win")) {
//             playerScore++
//         } else if (result.includes("Lose")) {
//             computerScore++
//         } else {
//             playerScore++
//             computerScore++
//         }
//         console.log(result)
//     }
//     var end
//     if (playerScore > computerScore) {
//         end = "You Win"
//     } else if (computerScore > playerScore) {
//         end = "You Lose"
//     } else {
//         end = "It's a Draw"
//     }
//     console.log(`${end} with a score of ${playerScore} to ${computerScore}.`)
// }
