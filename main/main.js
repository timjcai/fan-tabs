const alertContainer = document.querySelector("[data-alert-container]");
const genOnePokemon = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran-f",
  "Nidorina",
  "Nidoqueen",
  "Nidoran-m",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew"
];
const remainingPokemon = [];

// var p = getRandomInt(1, 151);
// var targetGuess = genOnePokemon[p-1].toLowerCase();
var guessAttempt = document.querySelector("#guess");
var form = document.querySelector('form');


// Game Setup
window.addEventListener("load", (event) => {
  var pokemon = createGameData(genOnePokemon);
  setupGame(pokemon);
  changeOpacity();
});

function createGameData(array) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  var p = getRandomInt(1, 151);
  return [p, array[p-1].toLowerCase()]
}

function setupGame(array) {
  // const r = getRandomBackground;
  const link = `/main/pokemon/${array[0]}.png`
  const pokemonDiv = document.getElementById("pokemon");
  console.log(array[1]);
  pokemonDiv.src = link;
  pokemonDiv.setAttribute('data-correct', array[1])
}

function collect(originalDatabase, gameData) {
  if (originalDatabase.length === gameData[0]){
    return originalDatabase.slice(0,originalDatabase.length-1)
  } else if (gameData[0] === 0){
    return originalDatabase.slice(1,originalDatabase.length)
  } else {
    const lowendMax = gameData[0];
    const highendMin = gameData[0] + 1;
    return originalDatabase.slice(0,lowendMax).concat(originalDatabase.slice(highendMin,originalDatabase.length));
  }
}

var alteredDatabase = collect(genOnePokemon, pokemon);

console.log(alteredDatabase)

// helpers

// game state
function changeOpacity() {
  const pokemon = document.getElementById("pokemon");
  var value = parseFloat(pokemon.style.opacity);
  console.log(value);
  if (value < 0.10) {
    value = value + 0.01;
    pokemon.style.opacity = value;
  } else {
    pokemon.style.opacity = 1;
  }
}

var intervalID = setInterval(changeOpacity, 1000);
setTimeout(function(){
  clearInterval(intervalID);
  if (guessAttempt.value === document.querySelector('data-correct')) {
    guessAttempt.setAttribute("disabled", "");
  } else {
    showAlert('you failed to guess the pokemon');
    guessAttempt.style.background = "grey";
    guessAttempt.setAttribute("value","game over")
    guessAttempt.setAttribute("disabled", "");
  }
}, 10000) // stop it after 20seconds

function showAlert(message, duration = 1000) {
  const alert = document.createElement("div")
  alert.textContent = message;
  if (message === 'correct') {
    alert.classList.add("alert", "correct")
  } else if (message === 'you win!') {
    alert.classList.add("alert", "correct")
  } else {
    alert.classList.add("alert");
  }
  alertContainer.prepend(alert)
  setTimeout(()=> {
    alert.classList.add("hide")
    alert.addEventListener("transitionend", () => {
      alert.remove()
    })
  }, duration)
}

// handling interactivity with user
function submitGuess(value) {
  if (value === document.querySelector('data-correct')){
    showAlert('correct');
    pokemon.style.opacity = 1;
    showAlert ('you win!');
    createGameData(genOnePokemon);
  } else {
    showAlert('incorrect guess');
  }
}

function handleSubmission(event) {
    event.preventDefault();
    submitGuess(guessAttempt.value);
}


function startInteraction () {
  form.addEventListener("submit", handleSubmission)
}

startInteraction();
