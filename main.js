
//prompt user for selection
//store user's selection in string.
//check if solution matches with rock, sccisors or paper.
//if there is no match prompt the user again and allow user to break.
// function getPlayerChoice() {

//     while (true) {
//         const playerStorage = prompt("Choose Rock Paper or Scissors.")
//         const playerStorageArray = playerStorage.split(" ")
//         const firstWord = playerStorageArray[0]

//         if (firstWord.toLowerCase() == "rock" || firstWord.toLowerCase() == "scissors" || firstWord.toLowerCase() == "paper") {
//             return firstWord
//         } 
//         else {
//             console.log("Value Not Recognised, Please Choose Rock Paper or Scissors.")
//         }
//     }
// }
// function playGame() {
//     const result = selections(getPlayerChoice(), getComputerChoice()).toLowerCase()
    
//     // if winner + 1 to yourWin
//     //if looser +1 to yourLose
//     //if draw +1 to itsADraw
//     const winner = "winner"
//     const loser = "loser"
//     const draw = "draw"

//     let yourWin = 0
//     let yourLoss = 0
//     let itsADraw = 0

//     if (result === winner) {
//         yourWin++
//     }

//     if (result === loser) {
//         yourLoss++
//     }

//     if (result === draw) {
//         itsADraw++
//     }


//     console.log("The Score is Now " + yourWin + " Wins " + yourLoss + " Losses " + itsADraw + " Draws ")

//     while (yourLoss+yourWin+itsADraw < 5) {
        
//     const result = selections(getPlayerChoice(), getComputerChoice()).toLowerCase()
//         if (result.toLowerCase() === winner) {
//             yourWin++
//         }
//         else if (result.toLowerCase() === loser) {
//             yourLoss++
//         }
//         else if (result.toLowerCase() === draw) {
//             itsADraw++
//     }
//     console.log("The Score is Now " + yourWin + " Wins " + yourLoss + " Losses " + itsADraw + " Draws ")
//     }
//     if (yourWin >= 3) {
//         console.log("Congratulations You've Won!")
//     }
//     else if (yourLoss >= 3) {
//         console.log("You've Lost the Game")
//     }
//     else {
//         console.log("it's a Draw")
//     }
// }
// function selections(playerSelection, computerSelection) {
//     if players selection is rock compare with computer selection and check if computer
//     is also rock -tie, check if it's scissors - win, check if its paper -loss. 
//     If player selection if scissors compare with comp, if its rock -loss. paper -win. 
//     scissors - draw. 
//     If player paper, paper draw, rock win, scissors loss.
//     const rock = "Rock"
//     const paper = "Paper"
//     const scissors = "Scissors"

//     const resultArray = ["Winner", "Loser", "Draw"]


//     Rock Selection
//     while (playerSelection.toLowerCase() == rock.toLowerCase()) {
//         if (computerSelection.toLowerCase() == rock.toLowerCase()) {
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("Tie")
//             return resultArray[2]
//         }
//         else if (computerSelection.toLowerCase() == paper.toLowerCase()){
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("You Lose!")
//             return resultArray[1]
//         }
//         else if (computerSelection.toLowerCase() == scissors.toLowerCase()) {
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("You Win!")
//             return resultArray[0]
//         }   
//         break;
//     }

//     while (playerSelection.toLowerCase() == paper.toLowerCase()) {
//         if (computerSelection.toLowerCase() == rock.toLowerCase()) {
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("You Win!")
//             return resultArray[0]
//         }
//         else if (computerSelection.toLowerCase() == paper.toLowerCase()){
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("Tie")
//             return resultArray[2]
//         }
//         else if (computerSelection.toLowerCase() == scissors.toLowerCase()) {
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("You Lose!")
//             return resultArray[1]
//         }   
//         break;
//     }

//     while (playerSelection.toLowerCase() == scissors.toLowerCase()) {
//         if (computerSelection.toLowerCase() == rock.toLowerCase()) {
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("You Lose!")
//             return resultArray[1]
//         }
//         else if (computerSelection.toLowerCase() == paper.toLowerCase()){
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("You Win!")
//             return resultArray[0]
//         }
//         else if (computerSelection.toLowerCase() == scissors.toLowerCase()) {
//             console.log("The Computer Has Selected " + computerSelection)
//             console.log("Tie")
//             return resultArray[2]
//         }   
//         break;
//     }
// }
// function playGame() {
//     const result = selections(getPlayerChoice(), getComputerChoice()).toLowerCase()
    
//     // if winner + 1 to yourWin
//     //if looser +1 to yourLose
//     //if draw +1 to itsADraw
//     const winner = "winner"
//     const loser = "loser"
//     const draw = "draw"

//     let yourWin = 0
//     let yourLoss = 0
//     let itsADraw = 0

//     if (result === winner) {
//         yourWin++
//     }

//     if (result === loser) {
//         yourLoss++
//     }

//     if (result === draw) {
//         itsADraw++
//     }


//     console.log("The Score is Now " + yourWin + " Wins " + yourLoss + " Losses " + itsADraw + " Draws ")

//     while (yourLoss+yourWin+itsADraw < 5) {
        
//     const result = selections(getPlayerChoice(), getComputerChoice()).toLowerCase()
//         if (result.toLowerCase() === winner) {
//             yourWin++
//         }
//         else if (result.toLowerCase() === loser) {
//             yourLoss++
//         }
//         else if (result.toLowerCase() === draw) {
//             itsADraw++
//     }
//     console.log("The Score is Now " + yourWin + " Wins " + yourLoss + " Losses " + itsADraw + " Draws ")
//     }
//     if (yourWin >= 3) {
//         console.log("Congratulations You've Won!")
//     }
//     else if (yourLoss >= 3) {
//         console.log("You've Lost the Game")
//     }
//     else {
//         console.log("it's a Draw")
//     }
// }
function getComputerChoice() {
    const choicesArray = ["Rock", "Scissors", "Paper"]
    const randomValue = Math.floor(Math.random()*3)
    return choicesArray[randomValue]
}

function getPlayerChoice(playerChoice) {
    return playerChoice;
}


function selections(playerSelection, computerSelection) {
    const rock = "rock"
    const paper = "paper"
    const scissors = "scissors"

    const resultArray = ["Winner", "Loser", "Draw"]

    while (playerSelection.toLowerCase() == rock.toLowerCase()) {
        if (computerSelection.toLowerCase() == rock.toLowerCase()) {
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "Tie";
            return resultArray[2]
        }
        else if (computerSelection.toLowerCase() == paper.toLowerCase()){
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "You Lose!";
            return resultArray[1]
        }
        else if (computerSelection.toLowerCase() == scissors.toLowerCase()) {
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "You Win!";
            return resultArray[0]
        }   
        break;
    }

    while (playerSelection.toLowerCase() == paper.toLowerCase()) {
        if (computerSelection.toLowerCase() == rock.toLowerCase()) {
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "You Win!";
            return resultArray[0]
        }
        else if (computerSelection.toLowerCase() == paper.toLowerCase()){
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "Tie";
            return resultArray[2]
        }
        else if (computerSelection.toLowerCase() == scissors.toLowerCase()) {
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "You Lose!";
            return resultArray[1]
        }   
        break;
    }

    while (playerSelection.toLowerCase() == scissors.toLowerCase()) {
        if (computerSelection.toLowerCase() == rock.toLowerCase()) {
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "You Lose!";
            return resultArray[1]
        }
        else if (computerSelection.toLowerCase() == paper.toLowerCase()){
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "You Win!";
            return resultArray[0]
        }
        else if (computerSelection.toLowerCase() == scissors.toLowerCase()) {
            const curResult = document.getElementById("curResult")
            curResult.textContent = "Result: " + "Tie";
            return resultArray[2]
        }   
        break;
    }
}

let yourWin = 0
let yourLoss = 0
let itsADraw = 0

function keepScore(result) {
    const winner = "winner"
    const loser = "loser"
    const draw = "draw"
    
    if (result === winner) {
        yourWin++
    }
    
    if (result === loser) {
        yourLoss++
    }
    
    if (result === draw) {
        itsADraw++
    }

    const totResult = document.getElementById("totResult")
    totResult.textContent = "The Score is Now " + yourWin + " Wins " + yourLoss + " Losses " + itsADraw + " Draws ";
    const finalScore = document.getElementById("finalScore")
    finalScore.textContent = yourWin + yourLoss + itsADraw  + " Out of " + "5 Games Played.";


    if (yourLoss+yourWin+itsADraw === 5) {
        if (yourWin >= 3) {
            const finalResult = document.getElementById("finalResult")
            finalResult.textContent = "Congratulations You've Won! - Play Again"
            finalResult.style.color = " green"
            yourWin = 0;
            yourLoss = 0;
            itsADraw = 0;
        }
        else if (yourLoss >= 3) {
            const finalResult = document.getElementById("finalResult")
            finalResult.textContent = "You've Lost the Game - Play Again"
            finalResult.style.color = " red"
            yourWin = 0;
            yourLoss = 0;
            itsADraw = 0;
        }
        else {
            const finalResult = document.getElementById("finalResult")
            finalResult.textContent = "it's a Draw - Play Again"
            finalResult.style.color = " grey"
            yourWin = 0;
            yourLoss = 0;
            itsADraw = 0;
        }
    }
}

function playGame(getPlayerChoice) {
    const result = selections(getPlayerChoice, getComputerChoice().toLowerCase())
    keepScore(result.toLowerCase())

}


const rpsgame = document.getElementById("rpsGame")
const btns = rpsgame.getElementsByTagName("button")

function handleClick(event) {
    const playerChoice = event.target.innerText;
    playGame(getPlayerChoice(playerChoice))
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleClick);
}


