let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('user-choice')
let displayResult = document.getElementById('result') 
 
//New values
let compTot = document.getElementById('computer-wins')
let usrTot = document.getElementById('user-wins')
let tie = document.getElementById('userComp-tie')

//querySelector() is another method you can use to get the first element type
let possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice 
let usrResult

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice();
result();
}))

function generateComputerChoice(){
    // Returns a random integer from 0 to 2:
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            computerChoice = 'rock'
            break;
        case 1:
            computerChoice = 'paper'
            break;
        case 2:
            computerChoice = 'scissors'
            break;
    }
    console.log(computerChoice);
    computerChoiceDisplay.innerHTML = computerChoice;

}
 

function result(){
    let compVal
    if(userChoice === computerChoice){
        usrResult = 'Draw!'
        tie.innerHTML = parseInt(tie.innerHTML) + 1;
        tie.className = 'result'
    }
    if(userChoice === 'rock' && computerChoice === 'paper'){
        usrResult = 'Computer Wins!'
        compTot.innerHTML = parseInt(compTot.innerHTML) + 1;
        computerChoiceDisplay.className = 'winner'
        userChoiceDisplay.className = 'looser'
    }
    if(userChoice === 'rock' && computerChoice === 'scissors'){
        usrResult = 'Human Wins!'
        usrTot.innerHTML = parseInt(usrTot.innerHTML) + 1;
        computerChoiceDisplay.className = 'looser'
        userChoiceDisplay.className = 'winner'
    }
    if(userChoice === 'paper' && computerChoice === 'rock'){
        usrResult = 'Computer Wins!'
        compTot.innerHTML = parseInt(compTot.innerHTML) + 1;
        computerChoiceDisplay.className = 'winner'
        userChoiceDisplay.className = 'looser'
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'){
        usrResult = 'Computer Wins!' 
        compTot.innerHTML = parseInt(compTot.innerHTML) + 1;
        computerChoiceDisplay.className = 'winner'
        userChoiceDisplay.className = 'looser'
    }
    if(userChoice === 'scissors' && computerChoice === 'rock'){
        usrResult = 'Computer Wins!'  
        compTot.innerHTML = parseInt(compTot.innerHTML) + 1;
        computerChoiceDisplay.className = 'winner'
        userChoiceDisplay.className = 'looser'
    }
    if(userChoice === 'scissors' && computerChoice === 'paper'){
        usrResult = 'Human Wins!'
        usrTot.innerHTML = parseInt(usrTot.innerHTML) + 1;
        computerChoiceDisplay.className = 'looser'
        userChoiceDisplay.className = 'winner'
    }
    displayResult.innerHTML = usrResult

    if(compTot.innerHTML >= usrTot.innerHTML){
        compTot.className = 'winner'
        usrTot.className = 'looser'
    }
    if (compTot.innerHTML <= usrTot.innerHTML){
        compTot.className = 'looser'
        usrTot.className = 'winner'
    }

    tie.className = 'tie'
    
}
