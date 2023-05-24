
// DOM elements
const buttons = document.querySelectorAll("button");
let topString = document.getElementById("top-screen");
let current = document.getElementById("current-value");

// variables
let firstNumber = '';
let secondNumber = '';
let result = 0;
let operator = '';

function updateTopScreen(text) {
  topString.innerHTML += text
}

function updateOperator(text) {
  updateTopScreen(` ${text} `)
  if (operator !== '') {
    console.log(`An operator already exists: ${operator}`)
    operator = text
    console.log((`Operator updated to ${operator}`));
    handleOperation()
  } else {
    operator = text
  }
}

function handleDelete() {
  firstNumber = '';
  secondNumber = '';
  result = 0;
  operator = '';
  topString.innerHTML = '';
  current.innerHTML = '';
}

function getResult() {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  if (operator === '+') {
    result = firstNumber + secondNumber
  } else if (operator === '-') {
    result = firstNumber - secondNumber
  } else if (operator === 'x') {
    result = firstNumber * secondNumber
  } else {
    result = firstNumber / secondNumber
  }
  return result;
}

function handleOperation() {
  result = getResult();
  current.innerHTML = result
  // clean the operator!
  operator = ''
  // set the firstNumber to the result, I need to return it to string!
  firstNumber = result.toString()
  console.log(`The first number is ${firstNumber}, type ${typeof firstNumber}`);
  // set the second number to 0
  console.log('setting the second number to 0');
  secondNumber = ''
}

function handleDecimal() {
  if (secondNumber !== 0) {
    console.log("Adding decimal to second number")
  } else {
    console.log("Adding decimal to fisrt number");
  }
}

function updateNumbers(number) {
  if (operator === '') {
    updateTopScreen(number)
    firstNumber = topString.innerHTML;
    console.log(`The first number: ${firstNumber}, is type ${typeof firstNumber}`)
  } else {
    updateTopScreen(number)
    secondNumber += number
    console.log(`The second number: ${secondNumber}, type ${typeof secondNumber}`)
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
      handleDelete()
    } else if (currentElement === "equal") {
      handleOperation()
    } else if (currentElement === "comma") {
      handleDecimal()
    } else {
      updateNumbers(e.target.id)
    }
  })
})
