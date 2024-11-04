// Create function called 'getComputerChoice'
computersentence = 'Computer chose '
function getComputerChoice() {
    // Get a random number between 0 and 1
    number = Math.random()
    // Multiply that number by 100
    number *= 100
    // Chop off the decimal portion of that number
    number = Math.floor(number)
    console.log(number)
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