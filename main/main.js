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

// class Database {
//   constructor(dataset) {
//     this.dataset = dataset;
//   }
// }

// class Game {
//   constructor(database) {
//     this.database = database;
//   }

//   createGameData() {
//     function getRandomInt(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min) + min);
//     }
//     const p = getRandomInt(1, 151);
//     const name = this.database[p-1].toLowerCase();
//     return [p, name];
//   }

//   setupGame() {
//     const link = `/main/targetImages/${array[0]}.png`
//     const pokemonDiv = document.getElementById("know");
//     console.log(array[1]);
//     pokemonDiv.src = link;
//     pokemonDiv.setAttribute('data-correct', array[1]);
//   }

// }

// const originalDatabase = new Database(genOnePokemon);
// console.log(originalDatabase)
// counter = 1
// const round1 = new Game(genOnePokemon)
// console.log(round1.database)
// console.log(round1.createGameData())

// Game Setup
window.addEventListener("load", (event) => {
  let gameOver = false;
  let counter = 1;
  while (gameOver === false) {
    // displayRound(counter);
    // createNewGame(database);
    // changeOpacity();
    var newGame = createGameData(genOnePokemon);
    setupGame(newGame);
    changeOpacity();
    gameOver = startInteraction();
  }
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
  const link = `/main/targetImages/${array[0]}.png`
  const newTarget = document.createElement("img")
  newTarget.id = "know"
  newTarget.src = link;
  newTarget.setAttribute('data-correct', array[1])
  newTarget.style.opacity = 0.01;
  imageContainer = document.querySelector(".image-container");
  console.log(newTarget)
  console.log(imageContainer);
  imageContainer.appendChild(newTarget);
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

function resetGame() {
  const imageContainer = document.querySelector(".image-container")
  const target = document.querySelector("#know")
  imageContainer.removeChild(target);
}
// helpers

// game state
function changeOpacity() {
  const pokemon = document.getElementById("know");
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
  const correctImage = document.querySelector('[data-correct]');
  const correctAnswer = correctImage.getAttribute("data-correct");
  if (guessAttempt.value === correctAnswer) {
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
  const correctImage = document.querySelector('[data-correct]');
  const correctAnswer = correctImage.getAttribute("data-correct");
  if (value === correctAnswer){
    showAlert('correct');
    correctImage.style.opacity = 1;
    showAlert ('you win!');
    return true;
  } else {
    showAlert('incorrect guess');
    return false;
  }
}

function handleSubmission(event) {
  event.preventDefault();
  return submitGuess(guessAttempt.value);
}


function startInteraction () {
  form.addEventListener("submit", handleSubmission)
}

startInteraction();
