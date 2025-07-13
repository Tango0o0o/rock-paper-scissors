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


// Create vairiable for computer and user scores
// Default 0
humanScore = 0
computerScore = 0



// Logic to play a round
// New function called playRound

let human_score = document.getElementById("h-score");
let comp_score = document.getElementById("c-score");
let game_act = document.getElementById("game-action")
function updatescores() {
    human_score.innerHTML = "You: " + humanScore;
    comp_score.innerHTML = "Computer: " + computerScore;
};

function playRound(humanChoice, ComputerChoice) { // Take parameters of humanChoice and ComputerChoice 

    console.log(humanChoice, ComputerChoice);
    game_act.innerHTML = `You chose ${humanChoice} and the computer chose ${ComputerChoice}`
    // Determine who won
    // Output result
    // Award one point to winner
    if (humanChoice == 'rock' && ComputerChoice == 'scissors' || humanChoice == 'scissors' && ComputerChoice == 'paper' || humanChoice == 'paper' && ComputerChoice == 'rock') {
        humanScore += 1
        updatescores();
        return ('You win!')
    } else if (humanChoice == ComputerChoice) {
        computerScore += 1
        humanScore += 1
        updatescores();
        return ('Draw')
    } else {
        computerScore += 1
        updatescores();
        return ('You lose!')
    }
    

}


// get every button in a list, add event listener to each, passing value into playround then.

// basically here, we are linking each clickable container to the button so we can retrieve the innerHTML text from the button to pass into playRound

// To be honest I think spans could've been used instead of buttons... but I didn't think that far ahead so
const action_ctnrs = document.getElementsByClassName("action-ctnr"); // get the container
const buttons = document.getElementsByClassName("action-btn"); // get the buttons



const action_ctnrs_array = Array.from(action_ctnrs); // NodeList into array
const buttonsarray = Array.from(buttons); // NodeList into array


const result = document.getElementById("result");
for (const i in action_ctnrs_array) { 
    action_ctnrs_array[i].style.backgroundColor = action_ctnrs_array[i].dataset.color;
    action_ctnrs_array[i].addEventListener("click", function () { //add eventlistener to each container
        result.innerHTML = "Result: " + playRound(buttonsarray[i].innerHTML.toLowerCase(), getComputerChoice());
    });
};



// Ok, transitioning + animating the colors of the action containers on hover

for (const i in action_ctnrs_array) {
    action_ctnrs_array[i].addEventListener("mouseover", function() {
        action_ctnrs_array[i].style.transition = "background-color 0.5s";
        action_ctnrs_array[i].style.transition = "transform 0.5s";
        
        action_ctnrs_array[i].style.backgroundColor = "#22ff00";
        action_ctnrs_array[i].style.transform = "translate(-10px, -10px)";
        action_ctnrs_array[i].style.boxShadow = "10px 10px black";

    });

    // Reverting to default once mouse off container
    action_ctnrs_array[i].addEventListener("mouseout", function() {
        action_ctnrs_array[i].style.backgroundColor = action_ctnrs_array[i].dataset.color; // referring to the color set in the html
        action_ctnrs_array[i].style.transform = "translate(0px,0px)";
        action_ctnrs_array[i].style.boxShadow = "none";

    });
};