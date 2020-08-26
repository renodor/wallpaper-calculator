const calculatorForm = document.getElementById('wallpaper-calculator');
const calculateBtn = document.getElementById('calculate-btn');
const resetBtn = document.getElementById('reset-btn');
const result = document.querySelector('#result');
const wallsDimensionsContainer = document.querySelector('.walls-dimensions-container');
const addWallBtn = document.getElementById('add-wall-btn');
let numberOfWalls = 1;

const feetToMeters = (feets) => {
  return feets / 3.2808;
};

const calculateSurface = (width, height) => {
  return width * height;
};

const wallsDimensionsHtml = (id) => {
  return `<div class="form-row walls-dimensions">
    <div class="form-group col-md-6">
      <label for="wall-width">Width in metres</label>
      <input type="number" min="0" class="form-control wall-width" id="wall-width-${id}">
    </div>
    <div class="form-group col-md-6">
      <label for="wall-height">Height in metres</label>
      <input type="number" min="0" class="form-control wall-height" id="wall-height-${id}">
    </div>
  </div>`;
};

addWallBtn.addEventListener('click', (event) => {
  event.preventDefault();
  numberOfWalls += 1;
  wallsDimensionsContainer.insertAdjacentHTML('beforeend', wallsDimensionsHtml(numberOfWalls));
});

calculateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const rollWidth = calculatorForm.querySelector('#roll-width').value / 100;
  const rollLength = calculatorForm.querySelector('#roll-length').value;
  // const feets = calculatorForm.querySelector('#feets').checked;
  const wallsDimensions = calculatorForm.querySelectorAll('.walls-dimensions');
  let totalWallsSurface = 0;

  wallsDimensions.forEach((wallDimension) => {
    let wallWidth = wallDimension.querySelector('.wall-width').value;
    let wallHeight = wallDimension.querySelector('.wall-height').value;
    // if (feets) {
    //   wallWidth = feetToMeters(wallWidth);
    //   wallHeight = feetToMeters(wallHeight);
    // }
    totalWallsSurface += calculateSurface(wallWidth, wallHeight);
  });

  if (totalWallsSurface != 0) {
    const totalWallsSurfaceWithErrorMargin = totalWallsSurface * 1.1;
    const rollSurface = calculateSurface(rollWidth, rollLength);
    const rollsNeeded = Math.ceil(totalWallsSurfaceWithErrorMargin / rollSurface);
    result.innerHTML = `We estimate you’ll need <b>${rollsNeeded}</b> rolls of our wallpaper to cover <b>${totalWallsSurface}</b> square meters of wall.`;
  } else {
    result.innerHTML = `Please enter your wall(s) dimensions`;
  }
});

resetBtn.addEventListener('click', (event) => {
  event.preventDefault();
  result.innerHTML = '';
  numberOfWalls = 1;
  wallsDimensionsContainer.innerHTML = wallsDimensionsHtml(numberOfWalls);
  // calculatorForm.querySelector('#meters').checked = true;
  // calculatorForm.querySelector('#feets').checked = false;
  const firstRollsOption = calculatorForm.querySelector('#roll-width option:first-child').value;
  calculatorForm.querySelector('#roll-width').value = firstRollsOption;
});


