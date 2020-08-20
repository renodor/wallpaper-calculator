const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const calculatorForm = document.getElementById('wallpaper-calculator');
const result = document.querySelector('#result span');

calculateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const rollWidth = calculatorForm.querySelector('#roll-width').value / 100;
  const rollLength = calculatorForm.querySelector('#roll-length').value;
  const meters = calculatorForm.querySelector('#meters').checked;
  const feets = calculatorForm.querySelector('#feets').checked;
  const wallWidth = calculatorForm.querySelector('#wall-width').value;
  const wallHeight = calculatorForm.querySelector('#wall-height').value;

  const rollSurface = rollWidth * rollLength;
  const wallSurface = wallWidth * wallHeight;
  const rollsNeeded = Math.ceil(wallSurface / rollSurface);
  result.innerHTML = rollsNeeded;
});

resetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const allInputs = calculatorForm.querySelectorAll('input');
  allInputs.forEach((input) => {
    console.log(input);
  })
});
