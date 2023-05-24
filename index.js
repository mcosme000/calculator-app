
// DOM elements
const buttons = document.querySelectorAll("button");
let topString = document.getElementById("top-screen");
let current = document.getElementById("current-value");

// variables
let firstNumber = '';
let secondNumber = '';
let result = 0;
let operator = '';

function handleReset() {
  firstNumber = '';
  secondNumber = '';
  result = 0;
  operator = '';
  topString.innerHTML = '';
  current.innerHTML = '';
}

function handleDelete() {
  if (secondNumber !== '') {
    secondNumber = secondNumber.slice(0, -1)
    updateTopScreen()
  } else {
    firstNumber = firstNumber.slice(0, -1)
    updateTopScreen()
  }
}

function updateTopScreen() {
  topString.innerHTML = `${firstNumber} ${operator} ${secondNumber}`
}

function updateOperator(text) {
  if (operator !== '') {
    operator = text
    updateTopScreen();
  } else if (firstNumber !== '' ) {
    operator = text
    updateTopScreen()
  }
}

function getResult() {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  if (operator === '+') {
    return firstNumber + secondNumber
  } else if (operator === '-') {
    return firstNumber - secondNumber
  } else if (operator === 'x') {
    return firstNumber * secondNumber
  } else {
    return firstNumber / secondNumber
  }
}

function handleOperation() {
  if (operator !== '') {
    result = getResult();
    current.innerHTML = result
    operator = ''
    firstNumber = result.toString()
    secondNumber = ''
  }
}

function handleDecimal() {
  if (secondNumber !== '') {
    if (!secondNumber.includes('.')) {
      secondNumber += '.'
      updateTopScreen()
    }
  } else {
    if (!firstNumber.includes('.')) {
      firstNumber += '.'
      updateTopScreen()
    }
  }
}

function updateNumbers(number) {
  if (operator === '') {
    firstNumber += number;
    updateTopScreen()
  } else {
    secondNumber += number
    updateTopScreen()
  }
}


// 1. identify the clicked element
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    let currentElementId = e.target.id
    if (currentElementId === "operator") {
      updateOperator(e.target.innerHTML)
    } else if (currentElementId === "delete") {
      handleDelete()
    } else if (currentElementId === "reset") {
      handleReset()
    } else if (currentElementId === "equal") {
      handleOperation()
    } else if (currentElementId === "comma") {
      handleDecimal()
    } else {
      updateNumbers(e.target.id)
    }
  })
})
