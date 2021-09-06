// naming the variables!
const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')

const gameGrid = document.getElementById('game')

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['Rock', 'Paper', 'Scissors']

let userChoice
let computerChoice


//click on button events
const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User Choice: ' + userChoice

    generateComputerChoice()
    getResult()
}

//creating randomic choices
const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]

    computerChoice = randomChoice

    computerChoiceDisplay.innerHTML = "Computer's choice: " + randomChoice
}

//creating the buttons
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] // you can delete this if you want to use e.target.innerHTML in the handleClick
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)

    gameGrid.appendChild(button)
}

//gerenating the result!
const getResult = () => {
    switch(userChoice + computerChoice) {
        case "ScissorsPaper":
        case "RockScissors":
        case "PaperRock":
            resultDisplay.innerHTML = "YOU WIN!"
            break
        case "PaperScissors":
        case "ScissorsRock":
        case "RockPaper":
            resultDisplay.innerHTML = "YOU LOSE!"
            break
        case "PaperPaper":
        case "ScissorsScissors":
        case "RockRock":
            resultDisplay.innerHTML = "IT'S A DRAW!"
            break
    }
}


