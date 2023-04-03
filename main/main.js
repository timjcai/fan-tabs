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

class Database {
  constructor(dataset) {
    this.dataset = dataset;
  }

  remove(index) {
    if (this.dataset.length === index) {
      return this.dataset = this.dataset.slice(0, this.dataset.length-1);
    } else if (index === 1) {
      return this.dataset = this.dataset.slice(1, this.dataset.length);
    } else if (index === 2){
      const first = [this.dataset[0]];
      const second = this.dataset.slice(2, this.dataset.length);
      return this.dataset = first.concat(second);
    } else {
      const lowendMax = index - 1;
      const highendMin = index;
      return this.dataset = this.dataset.slice(0,lowendMax).concat(this.dataset.slice(highendMin, this.dataset.length));
    }
  }

  totalRound () {
    return this.dataset.length
  }

  currentRound () {
    return 1;
  }
}

class Round {
  constructor(database) {
    this.database = database;
  }

  createGameData(max) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    const p = getRandomInt(1, max);
    const name = this.database.dataset[p-1].toLowerCase();
    return [p, name];
  }

  setupGuess(array) {
    const link = `/main/targetImages/${array[0]}.png`
    const pokemonDiv = document.getElementById("know");
    console.log(array[1]);
    pokemonDiv.src = link;
    pokemonDiv.setAttribute('data-correct', array[1]);
  }

  match(correctAnswer, referringDatabase) {
    return referringDatabase.indexOf(correctAnswer);
  }

  createGuessItem (index, correctAnswer){
    const link = `/main/targetImages/${index}.png`
    const newTarget = document.createElement("img")
    newTarget.id = "know"
    newTarget.src = link;
    newTarget.setAttribute('data-correctanswer', correctAnswer)
    newTarget.style.opacity = 0.01;
    const imageContainer = document.querySelector(".image-container");
    console.log(newTarget)
    console.log(imageContainer);
    imageContainer.appendChild(newTarget);
  }

  deleteGuessItem(){
    const imageContainer = document.querySelector(".image-container")
    const target = document.querySelector("#know")
    imageContainer.removeChild(target);
  }
}

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function initGame() {
  const referralDatabase = new Database(genOnePokemon);
  let originalDatabase = new Database(genOnePokemon);
  const newRound = new Round(originalDatabase);
  const totalRounds = referralDatabase.totalRound();
  let currentRound = referralDatabase.currentRound();
  while (currentRound < totalRounds + 1) {
    console.log(`Round ${currentRound}` )
    let roundData = newRound.createGameData(originalDatabase.dataset.length);
    const originalPosition = newRound.match(capitalize(roundData[1]), referralDatabase.dataset);
    console.log(roundData);
    newRound.setupGuess(roundData);
    newRound.createGuessItem(roundData[0], roundData[1]);
    newRound.deleteGuessItem();
    console.log(originalDatabase.dataset[roundData[0]-1])
    console.log(`${roundData[1]}'s original position is ${originalPosition}`);
    originalDatabase.remove(roundData[0])
    currentRound += 1
    // console.log(currentRound)
  }
}

initGame();

function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Game Setup
// window.addEventListener("load", (event) => {
//   let counter = 1;
//   const totalRounds = genOnePokemon.length
//   const roundWon = document.querySelector("#know")
//   // displayRound(counter);
//   // createNewGame(database);
//   // changeOpacity();
//     resetGame();
//     var newGame = createGameData(genOnePokemon);
//     setupGame(newGame);
//     changeOpacity();
//     startInteraction();
//     console.log(roundWon.getAttribute('[data-win]'))
//     if (roundWon.getAttribute('[data-win]')) {
//       counter += 1
//       console.log(counter)
//     } else {
//       console.log('none')
//     }
//   }
// );




function resetGame() {
  const imageContainer = document.querySelector(".image-container")
  const target = document.querySelector("#know")
  imageContainer.removeChild(target);
}
// helpers

// game state
// function changeOpacity() {
//   const pokemon = document.getElementById("know");
//   var value = parseFloat(pokemon.style.opacity);
//   console.log(value);
//   if (value < 0.10) {
//     value = value + 0.01;
//     pokemon.style.opacity = value;
//   } else {
//     pokemon.style.opacity = 1;
//   }
// }

// var intervalID = setInterval(changeOpacity, 1000);
// setTimeout(()=>{
//   clearInterval(intervalID);
//   const correctImage = document.querySelector('[data-correctanswer]');
//   const correctAnswer = correctImage.getAttribute("data-correctanswer");
//   if (guessAttempt.value === correctAnswer) {
//     guessAttempt.setAttribute("disabled", "");
//   } else {
//     showAlert('you failed to guess the pokemon');
//     guessAttempt.style.background = "grey";
//     guessAttempt.setAttribute("value","game over")
//     guessAttempt.setAttribute("disabled", "");
//   }
// }, 10000) // stop it after 20seconds

// function showAlert(message, duration = 1000) {
//   const alert = document.createElement("div")
//   alert.textContent = message;
//   if (message === 'correct') {
//     alert.classList.add("alert", "correct")
//   } else if (message === 'you win!') {
//     alert.classList.add("alert", "correct")
//   } else {
//     alert.classList.add("alert");
//   }
//   alertContainer.prepend(alert)
//   setTimeout(()=> {
//     alert.classList.add("hide")
//     alert.addEventListener("transitionend", () => {
//       alert.remove()
//     })
//   }, duration)
// }

// handling interactivity with user
// function submitGuess(value) {
//   const correctImage = document.querySelector('[data-correctanswer]');
//   const correctAnswer = correctImage.getAttribute("data-correctanswer");
//   if (value === correctAnswer){
//     showAlert('correct');
//     correctImage.style.opacity = 1;
//     showAlert ('you win!');
//     correctImage.setAttribute('data-win',true)
//   } else {
//     showAlert('incorrect guess');
//     correctImage.setAttribute('data-win',false)
//   }
// }

// function handleSubmission(event) {
//   event.preventDefault();
//   return submitGuess(guessAttempt.value);
// }


// function startInteraction () {
//   form.addEventListener("submit", handleSubmission)
// }

// startInteraction();

// Archive Functions (delete later after code completely refactored)

// function collect(originalDatabase, gameData) {
//   if (originalDatabase.length === gameData[0]){
//     return originalDatabase.slice(0,originalDatabase.length-1)
//   } else if (gameData[0] === 0){
//     return originalDatabase.slice(1,originalDatabase.length)
//   } else {
//     const lowendMax = gameData[0];
//     const highendMin = gameData[0] + 1;
//     return originalDatabase.slice(0,lowendMax).concat(originalDatabase.slice(highendMin,originalDatabase.length));
//   }
// }

// function createGameData(array) {
//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   }
//   var p = getRandomInt(1, 151);
//   return [p, array[p-1].toLowerCase()]
// }

// function setupGame(array) {
//   // const r = getRandomBackground;
//   const link = `/main/targetImages/${array[0]}.png`
//   const newTarget = document.createElement("img")
//   newTarget.id = "know"
//   newTarget.src = link;
//   newTarget.setAttribute('data-correctanswer', array[1])
//   newTarget.style.opacity = 0.01;
//   imageContainer = document.querySelector(".image-container");
//   console.log(newTarget)
//   console.log(imageContainer);
//   imageContainer.appendChild(newTarget);
// }
