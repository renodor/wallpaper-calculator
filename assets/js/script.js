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
  return `<div class="input-row walls-dimensions">
            <div class="input-group">
              <label for="wall-width">Width in Metres</label>
              <input type="number" min="0" class="input input-reset wall-width" id="wall-width-1">
            </div>
            <div class="input-group">
              <label for="wall-height">Height in Metres</label>
              <input type="number" min="0" class="input input-reset wall-height" id="wall-height-1">
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
    const totalWallsSurfaceRoundedUp = Math.round((totalWallsSurface + Number.EPSILON) * 100) / 100;
    const totalWallsSurfaceWithErrorMargin = totalWallsSurface * 1.1;
    const rollSurface = calculateSurface(rollWidth, rollLength);
    const rollsNeeded = totalWallsSurfaceWithErrorMargin / rollSurface;
    const rollsNeededRoundedUp = Math.round((rollsNeeded + Number.EPSILON) * 100) / 100;
    const rollsNeededCeiledUp = Math.ceil(rollsNeededRoundedUp);
    result.innerHTML = `We estimate you’ll need ${rollsNeededRoundedUp} rounded up to <b>${rollsNeededCeiledUp}</b>
      rolls of our wallpaper to cover <b>${totalWallsSurfaceRoundedUp}</b> square metres of wall.`;
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


