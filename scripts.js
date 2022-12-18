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

function getPlayerChoice() {
    let playerChoice 
    while(true) {
        playerChoice = prompt("Choose Rock - Paper - Scissor: ");
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
        if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissor") {
            console.log(playerChoice)
            return playerChoice
        } else {
            console.log(playerChoice)
            alert("This choice is not supported!");
        }

    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Scissor" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissor" && computerChoice === "Paper") {
        return `You Win! ${playerChoice} beats ${computerChoice}`
    } else if (playerChoice === "Rock" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Scissor" || playerChoice === "Scissor" && computerChoice === "Rock") {
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    } else {
        return `It's a Draw! You both chose ${playerChoice}`
    }
}

function game() {
    var playerScore = 0
    var computerScore = 0
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice()
        const computerChoice = getComputerChoice()
        const result = playRound(playerChoice, computerChoice)
        if (result.includes("Win")) {
            playerScore++
        } else if (result.includes("Lose")) {
            computerScore++
        } else {
            playerScore++
            computerScore++
        }
        console.log(result)
    }
    var end
    if (playerScore > computerScore) {
        end = "You Win"
    } else if (computerScore > playerScore) {
        end = "You Lose"
    } else {
        end = "It's a Draw"
    }
    console.log(`${end} with a score of ${playerScore} to ${computerScore}.`)
}

game()