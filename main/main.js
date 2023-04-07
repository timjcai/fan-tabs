import {initTimer} from './javascript/timer.js';
import {Database} from './javascript/database.js';
import {Round} from './javascript/round.js';

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

const startButton = document.querySelector('.game-btn')
const roundContainer = document.querySelector(".round")
const guessAttempt = document.querySelector("#guess");
const form = document.querySelector('form');
const timeH = document.querySelector('.timer');
const scoreContainer = document.querySelector(".highest-score")
let count = 1;

function initGame() {
  let referralDatabase = new Database(genOnePokemon);
  let originalDatabase = new Database(genOnePokemon);
  let newRound = new Round(originalDatabase);
  let totalRounds = referralDatabase.totalRound();
  let currentRound = referralDatabase.currentRound();
  let allRounds = {};
  while (currentRound < totalRounds + 1) {
    let roundData = newRound.createGameData(originalDatabase.dataset.length);
    allRounds[`round${currentRound}`] = roundData
    originalDatabase.remove(roundData[0])
    currentRound += 1
  }
  return [referralDatabase, allRounds]
}

window.addEventListener("load", (event) => {
  scoreContainer.classList.add('hidden');
});

startButton.addEventListener("click", (event) => {
  console.log('a');
  let currentScore;
  let wholeGame = initGame();
  const scoreContainer = document.querySelector(".highest-score")
  const previousScore = parseInt(scoreContainer.innerHTML)
  startButton.classList.add('hidden');
  timeH.classList.remove('hidden');
  guessAttempt.classList.remove('hidden');
  roundContainer.innerHTML = displayRound('1');
  guessAttempt.disabled = false;
  guessAttempt.style.backgroundColor = '#ABC4AA';
  let roundNumber = 1;
  console.log(roundNumber);
  initTimer(count);
  let newRound = new Round(wholeGame[0])
  let ogP = originalPosition(wholeGame, roundNumber);
  newRound.createGuessItem(ogP+1, wholeGame[1][`round${roundNumber}`][1])
  let intervalID = setInterval(()=>{
    const roundContainer = document.querySelector(".round")
    if (count === 10) {
      timeH.innerHTML = 'Game Over'
      scoreContainer.innerHTML = scoreHandler(previousScore, currentScore);
      scoreContainer.classList.remove('hidden');
      startButton.classList.remove('hidden');
      startButton.innerHTML = 'Play Again?';
      clearInterval(intervalID);
      guessAttempt.disabled = true;
      guessAttempt.style.backgroundColor = 'grey';
      return [count = 1, highestScore]
    } else if (count > 10) {
      count = 0
      roundNumber ++
      currentScore = roundNumber - 1
      roundContainer.innerHTML = displayRound(roundNumber);
      initTimer(count);
      let ogP = originalPosition(wholeGame, roundNumber);
      newRound.createGuessItem(ogP+1,wholeGame[1][`round${roundNumber}`][1])
    } else {
      roundContainer.innerHTML = displayRound(roundNumber);
      changeOpacity();
      count++
      initTimer(count);
    }
  }, 1000)
})

// helpers

function initHideScore (element) {
  if (element === 0) {
    scoreContainer.classList.add('hidden')
  }
}
function originalPosition(database, round) {
  return match(capitalize(database[1][`round${round}`][1]), database[0].dataset)
}

function match(correctAnswer, referringDatabase) {
  return referringDatabase.indexOf(correctAnswer);
}

function countHandler(count) {
  if (count > 10){
    return 10 - count % 10;
  } else {
    return 10 - count;
  }
}

function displayRound(round){
  return `Round ${round}`
}

function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function scoreHandler (previousScore, currentScore) {
  if (currentScore > previousScore) {
    return currentScore
  } else {
    return previousScore
  }
}

// game state
function changeOpacity() {
  const pokemon = document.getElementById("know");
  var value = parseFloat(pokemon.style.opacity);
  if (value < 0.20) {
    value = value + 0.02;
    pokemon.style.opacity = value;
  } else {
    pokemon.style.opacity = 1;
  }
}

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
  const correctImage = document.querySelector('[data-correctanswer]');
  const correctAnswer = correctImage.getAttribute("data-correctanswer");
  console.log(correctImage);
  console.log(correctAnswer);
  if (value === correctAnswer){
    showAlert('correct');
    correctImage.style.opacity = 1;
    showAlert ('you win!');
    correctImage.setAttribute('data-win',true)
    guessAttempt.value = null;
    return count = 12
  } else {
    showAlert('incorrect guess');
    correctImage.setAttribute('data-win',false)
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
