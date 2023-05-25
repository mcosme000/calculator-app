// DOM elements
const buttons = document.querySelectorAll("button");
let topString = document.getElementById("top-screen");
let current = document.getElementById("current-value");

// variables
let firstNumber = '';
let secondNumber = '';
let result = 0;
let operator = '';

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
  if (operator !== '' && secondNumber !== '') {
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
    let currentElement = e.target.id
    if (currentElement === "operator") {
      updateOperator(e.target.innerHTML)
    } else if (currentElement === "delete") {
      handleDelete()
    } else if (currentElement === "reset") {
      handleReset()
    } else if (currentElement === "equal") {
      handleOperation()
    } else if (currentElement === "comma") {
      handleDecimal()
    } else {
      updateNumbers(e.target.id)
    }
  })
})
let inputs = document.querySelectorAll("input");
const body = document.querySelector("body");
inputs = [...inputs]

function changeStyle(input) {
  body.className = '';
  body.classList.add(`${input.id}-theme`)
}


inputs.forEach(input => {
  input.addEventListener('click', () => {
    input.style.opacity = '1';
    changeStyle(input);
    const different = inputs.filter(item => item !== input)
    different.forEach(diff => diff.style.opacity = '0')
  })
})
