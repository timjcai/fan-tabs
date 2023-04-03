export class Round {
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
    const link = `targetImages/${array[0]}.png`
    const pokemonDiv = document.getElementById("know");
    console.log(array[1]);
    pokemonDiv.src = link;
    pokemonDiv.setAttribute('data-correct', array[1]);
  }

  match(correctAnswer, referringDatabase) {
    return referringDatabase.indexOf(correctAnswer);
  }

  createGuessItem (index, correctAnswer){
    const link = `targetImages/${index}.png`
    const newTarget = document.createElement("img")
    newTarget.id = "know"
    newTarget.src = link;
    newTarget.setAttribute('data-correctanswer', correctAnswer)
    newTarget.style.opacity = 0.01;
    const imageContainer = document.querySelector(".image-container");
    // console.log(newTarget)
    // console.log(imageContainer);
    imageContainer.appendChild(newTarget);
  }

  deleteGuessItem(){
    const imageContainer = document.querySelector(".image-container")
    const target = document.querySelector("#know")
    imageContainer.removeChild(target);
  }

  changeOpacity() {
    const pokemon = document.getElementById("know");
    var value = parseFloat(pokemon.style.opacity);
    // console.log(value);
    if (value < 0.10) {
      value = value + 0.01;
      pokemon.style.opacity = value;
    } else {
      pokemon.style.opacity = 1;
    }
  }
}
