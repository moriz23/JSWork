const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//gets input value
function getUserInput() {
  return parseInt(userInput.value);
}

// writes calculation log
function createAndWriteOutput(operator, resultBefore, calcNumber){
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber)
  logEntries.push(enteredNumber);
}

function subtract(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
multiplyBtn.addEventListener("click", multiply)
divideBtn.addEventListener("click", divide)
