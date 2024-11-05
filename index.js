// Create function called 'getComputerChoice'
computersentence = 'Computer chose '
function getComputerChoice() {
    // Get a random number between 0 and 1
    number = Math.random()
    // Multiply that number by 100
    number *= 100
    // Chop off the decimal portion of that number
    number = Math.floor(number)
    // If the number is smaller than 33, the choice is rock
    if (number < 33) {
        return (computersentence + 'rock')
    } 
    // If the number is between 33 and 66, the choice is paper
    else if (33 < number && number < 66) {
        return (computersentence + 'paper')
    }
    // If the number is between 66 and 99, the choice is scissors
    else {
        return (computersentence + 'scissors')
    }
}

// Output the value

console.log(getComputerChoice())

// Logic for human choice

// Create a new function named "getHumanChoice"
function getHumanChoice() {
    // prompt user to enter an option
    userchoice = prompt("Enter rock, paper or scissors").toLowerCase()
    // return value and output
    return userchoice
}

console.log(getHumanChoice())

// Scoring

// Create vairiable for computer and user scores
// Default 0
