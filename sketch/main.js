const alertContainer = document.querySelector("[data-alert-container]")
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
]
var p = getRandomInt(1, 151);
var targetGuess = genOnePokemon[p-1].toLowerCase()
var guessAttempt = document.querySelector("#guess");
var form = document.querySelector('form');

window.addEventListener("load", (event) => {
  setup ();
  changeOpacity();
});

function setup() {
  // const r = getRandomBackground;
  const link = `/sketch/pokemon/${p}.png`
  const pokemonDiv = document.getElementById("pokemon");
  console.log(targetGuess);
  pokemonDiv.src = link;
  pokemonDiv.setAttribute('data-pokemonname', targetGuess)
}
// helpers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

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

function gameWon (message) {
  const alert = document.createElement("div")
  alert.textContent = message;
  alert.classList.add("alert", "correct");
  alertContainer.prepend(alert)
}

function gameLose(message) {
  const alert = document.createElement("div")
  alert.textContent = message;
  alert.classList.add("alert");
  alertContainer.prepend(alert)
}

var intervalID = setInterval(changeOpacity, 1000);
setTimeout(function(){
  clearInterval(intervalID);
  if (guessAttempt.value === targetGuess) {
    guessAttempt.setAttribute("disabled", "");
  } else {
    gameLose('you failed to guess the pokemon');
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
function handleSubmission(event) {
    event.preventDefault();
    submitGuess(guessAttempt.value);
}

function submitGuess(value) {
  if (value === targetGuess){
    showAlert('correct');
    pokemon.style.opacity = 1;
    gameWon ('you win!');
  } else {
    showAlert('incorrect guess');
  }
}

function startInteraction () {
  form.addEventListener("submit", handleSubmission)
}

startInteraction();
