const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const calculatorForm = document.getElementById('wallpaper-calculator');
const result = document.querySelector('#result span');

const feetToMeters = (feets) => {
  return feets / 3.2808;
};

calculateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const rollWidth = calculatorForm.querySelector('#roll-width').value / 100;
  const rollLength = calculatorForm.querySelector('#roll-length').value;
  const feets = calculatorForm.querySelector('#feets').checked;
  let wallWidth = calculatorForm.querySelector('#wall-width').value;
  let wallHeight = calculatorForm.querySelector('#wall-height').value;
  if (feets) {
    wallWidth = feetToMeters(wallWidth);
    wallHeight = feetToMeters(wallHeight);
  }

  const rollSurface = rollWidth * rollLength;
  const wallSurface = wallWidth * wallHeight;
  const rollsNeeded = Math.ceil(wallSurface / rollSurface);
  result.innerHTML = rollsNeeded;
});

resetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  result.innerHTML = ''
  calculatorForm.querySelector('#meters').checked = true;
  calculatorForm.querySelector('#feets').checked = false;
  calculatorForm.querySelector('#wall-width').value = null;
  calculatorForm.querySelector('#wall-height').value = null;
  calculatorForm.querySelector('#roll-width').value = calculatorForm.querySelector('#roll-width option:first-child').value;
});


