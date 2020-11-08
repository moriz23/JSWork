const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = ROCK;
const DRAW = "IT'S A DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`).toUpperCase();
  if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
    alert("You have selected an invalid option. We have chosen ROCK for you.")
    return
  }
  return selection
}

const getComputerChoice = () => {
  let randomNumber = Math.random();
  if(randomNumber < 0.34){
    console.log(randomNumber);
    return ROCK;
  } else if(randomNumber < 0.67){
    console.log(randomNumber);
    return PAPER;
  } else {
    console.log(randomNumber);
    return SCISSORS;
  }
}

const getWinner = (pChoice = DEFAULT_SELECTION, cChoice) => pChoice === cChoice ? DRAW : ((pChoice === ROCK && cChoice === SCISSORS) || (pChoice === SCISSORS && cChoice === PAPER) || (pChoice === PAPER && cChoice === ROCK)) ? PLAYER_WINS : COMPUTER_WINS

// const getWinner = function(pChoice, cChoice){
//   if(pChoice === cChoice){
//     return DRAW;
//   } else if(pChoice === ROCK && cChoice === SCISSORS || pChoice === SCISSORS && cChoice === PAPER || pChoice === PAPER && cChoice === ROCK){
//     return PLAYER_WINS;
//   } else {
//     return COMPUTER_WINS;
//   }
// }

startGameBtn.addEventListener("click", () => {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting....")
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  console.log(playerChoice);
  console.log(computerChoice);

  if(playerChoice){
    winner = getWinner(playerChoice, computerChoice)
  } else {
    winner = getWinner(computerChoice)
  }
  let message = `You picked ${playerChoice || DEFAULT_SELECTION} and computer picked ${computerChoice}, `

  if(winner === DRAW){
    message += 'so it is a draw.'
  } else if(winner === PLAYER_WINS){
    message += 'so you won!'
  } else {
    message += 'so you lost!'
  }
  console.log(message)
  gameIsRunning = false;
});

//not to game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
      return isNaN(number) ? 0 : number
  };
  let sum = 0;
  if(operation === "ADD"){
    for(const num of numbers){
      sum += validateNumber(num);
    }
  } else {
    for(const num of numbers){
      sum -= num;
    }
  }
  resultHandler(sum);
};

const subtract = function(resultHandler, ...numbers){
  let sum = 0;
  for(const num of numbers){
    sum -= num;
  }
  resultHandler(sum);
}

const showResult = (messageText, result) => {
  alert(`${messageText} ${result}.`)
}

combine(showResult.bind(this, "The result after adding all numbers is: "), "ADD", 1, 5, 10, -3, 6, 10, "a");
combine(showResult.bind(this, "The result after adding all numbers is: "), "ADD", 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, "The result after subtracting all numbers is: "), "SUBTRACT", 1, 10, 15, 20);