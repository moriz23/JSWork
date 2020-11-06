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

function writeToLog(operationIdentifier, prevResult, operationNumber, result){
  const logEntry = {
    operation: operationIdentifier,
    previousResults: prevResult,
    number: operationNumber,
    result: result
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber)
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide(){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber)
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
multiplyBtn.addEventListener("click", multiply)
divideBtn.addEventListener("click", divide)
