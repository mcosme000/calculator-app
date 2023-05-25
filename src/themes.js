
console.log("Hi from themes");

let inputs = document.querySelectorAll("input");
const body = document.querySelector("body");
inputs = [...inputs]

function changeStyle(input) {
  console.log(`Selected input: ${input.id}`)
  console.log('Changing the styles!!')
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
