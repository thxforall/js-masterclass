const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calsDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calsDescription); // from vender.js
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enterNumber;
  createAndWriteOutput('+', initialResult, enterNumber);
  writeToLog('ADD', initialResult, enterNumber, currentResult);
}

function subtract() {
  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enterNumber;
  createAndWriteOutput('-', initialResult, enterNumber);
  writeToLog('SUBTRACT', initialResult, enterNumber, currentResult);
}

function multiply() {
  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enterNumber;
  createAndWriteOutput('*', initialResult, enterNumber);
  writeToLog('MULTIPLY', initialResult, enterNumber, currentResult);
}

function divide() {
  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enterNumber;
  createAndWriteOutput('/', initialResult, enterNumber);
  writeToLog('DEVIDE', initialResult, enterNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
