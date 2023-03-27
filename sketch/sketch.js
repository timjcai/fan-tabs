window.addEventListener("load", (event) => {
  setup ()
});

function setup() {
  // const r = getRandomBackground;
  const p = getRandomInt(1, 151);
  const link = `/sketch/pokemon/${p}.png`
  const pokemon = document.getElementById("pokemon");
  pokemon.src = link;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function changeOpacty() {

}

function countDown () {
  const start = new Date().getTime();
  var now = new Date().getTime();
  var distance = start - now;

  var seconds = Math.floor ((distance % (1000*60))/1000);
  console.log(seconds);
}

countDown()
