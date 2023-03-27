function setup() {
  noCanvas();
  const r = getRandomBackground;
  console.log(r);
  createImg('background/' + r + '.jpg');
  background(0);
}

function getRandomBackground() {
  getRandomInt(1, 2)
}

function getRandomPokemon() {
  getRandomInt(1, 151)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
