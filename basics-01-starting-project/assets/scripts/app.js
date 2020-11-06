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

//create log object in console
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

//function that contains conditional on which math operation to perform. 
function calculateResult(calculationType){
  const enteredNumber = getUserInput();
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }
  
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator ='+';
  } else if(calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator ='-';
  } else if(calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator ='*';
  } else if(calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator ='/';
  }
 
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add(){
  calculateResult("ADD")
}

function subtract(){
  calculateResult('SUBTRACT')
}

function multiply(){
  calculateResult('MULTIPLY')
}

function divide(){
  calculateResult('DIVIDE')
}

addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
multiplyBtn.addEventListener("click", multiply)
divideBtn.addEventListener("click", divide)
