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
// function calculateResult(calculationType){
//   const enteredNumber = getUserInput();
  // if (
  //   calculationType !== 'ADD' &&
  //   calculationType !== 'SUBTRACT' &&
  //   calculationType !== 'MULTIPLY' &&
  //   calculationType !== 'DIVIDE' ||
  //   !enteredNumber
  // ) {
  //   return;
  // }
  
//   const initialResult = currentResult;
//   let mathOperator;
//   if(calculationType === "ADD") {
//     currentResult += enteredNumber;
//     mathOperator ='+';
//   } else if(calculationType === "SUBTRACT") {
//     currentResult -= enteredNumber;
//     mathOperator ='-';
//   } else if(calculationType === "MULTIPLY") {
//     currentResult *= enteredNumber;
//     mathOperator ='*';
//   } else if(calculationType === "DIVIDE") {
//     currentResult /= enteredNumber;
//     mathOperator ='/';
//   }
 
//   createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//   writeToLog(calculationType, initialResult, enteredNumber, currentResult)
// }

//bind practice 
function calculate(operation){
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  if (
    operation !== 'ADD' &&
    operation !== 'SUBTRACT' &&
    operation !== 'MULTIPLY' &&
    operation !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }
  let mathOperator;
  if(operation === "ADD") {
    currentResult += enteredNumber;
    mathOperator ='+';
  } else if(operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator ='-';
  } else if(operation === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator ='*';
  } else if(operation === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator ='/'; 
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult)
}

// function add(){
//   calculateResult("ADD")
// }

// function subtract(){
//   calculateResult('SUBTRACT')
// }

// function multiply(){
//   calculateResult('MULTIPLY')
// }

// function divide(){
//   calculateResult('DIVIDE')
// }

addBtn.addEventListener("click", calculate.bind(this, "ADD"))
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"))
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"))
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"))
