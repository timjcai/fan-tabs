window.addEventListener("load", (event) => {
  setup ();
  changeOpacity();
  let counter = 1;
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

function changeOpacity() {
  const pokemon = document.getElementById("pokemon");
  var value = parseFloat(pokemon.style.opacity);
  console.log(value);
  if (value < 0.2) {
    value = value + 0.01;
    pokemon.style.opacity = value;
  } else {
    pokemon.style.opacity = 1;
  }
}

var intervalID = setInterval(changeOpacity, 1000);

setTimeout(function(){
  clearInterval(intervalID);
}, 20000) // stop it after 20seconds
