// Create function called 'getComputerChoice'

function getComputerChoice() {
    // Get a random number between 0 and 1
    number = Math.random()
    // Multiply that number by 100
    number *= 100
    // Chop off the decimal portion of that number
    number = Math.floor(number)
    // If the number is smaller than 33, the choice is rock
    if (number < 33) {
        return ('rock')
    } 
    // If the number is between 33 and 66, the choice is paper
    else if (33 < number && number < 66) {
        return ('paper')
    }
    // If the number is between 66 and 99, the choice is scissors
    else {
        return ('scissors')
    }
}

// Output the value

// console.log(getComputerChoice())

// Logic for human choice

// Create a new function named "getHumanChoice"
function getHumanChoice() {
    // prompt user to enter an option
    userchoice = prompt("Enter rock, paper or scissors").toLowerCase()
    // return value and output
    return userchoice
}



// Scoring

// Create vairiable for computer and user scores
// Default 0
humanScore = 0
computerScore = 0

// Logic to play a round

// New function called playRound
function playRound(humanChoice, ComputerChoice) { // Take parameters of humanChoice and ComputerChoice 

    console.log(`You chose ${humanChoice} and the computer chose ${ComputerChoice}`)
    // Determine who won
    // Output result
    // Award one point to winner
    if (humanChoice == 'rock' && ComputerChoice == 'scissors' || humanChoice == 'scissors' && ComputerChoice == 'paper' || humanChoice == 'paper' && ComputerChoice == 'rock') {
        humanScore += 1
        return ('You win!')
    } else if (humanChoice == ComputerChoice) {
        return ('Draw')
    } else {
        computerScore += 1
        return ('You lose!')
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()))

// Logic to play whole game

// New function called playGame
// Declare playround in laygae
// Repeat playRound 5 times