//variable para la funcion que dara paso luego de ejecutar el boton de seleccionar personaje
let buttonCharacter = document.getElementById("button-character");
buttonCharacter.addEventListener("click", playerCharacter);

// $ para simplificar el codigo y evitar escribir document.getElementById tantas veces

let playerAttack;
let pcRandomAttack;
let enemyLifes = 3;
let playerLifes = 3;

let sectionRestartButton = document.getElementById("restart-button");
sectionRestartButton.style.display = "none";

let sectionAttack = document.getElementById("select-attack");
sectionAttack.style.display = "none";

function playerCharacter() {
 
  let sectionCharacter = document.getElementById("select-character");
  sectionCharacter.style.display = "none";

  let sectionAttack = document.getElementById("select-attack");
  sectionAttack.style.display = "block";

  const $ = (selector) => document.getElementById(selector);

  let inputIceberg = $("Iceberg");
  let inputAracrix = $("Aracrix");
  let inputDrogon = $("Drogon");
  let playerCharacter = $("character-player");

  if (inputIceberg.checked) playerCharacter.innerHTML = "Iceberg";
  else if (inputAracrix.checked) playerCharacter.innerHTML = "Aracrix";
  else if (inputDrogon.checked) playerCharacter.innerHTML = "Drogon";
  else alert("you have to choose a character to start");

  pcCharacter();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pcCharacter() {
  let randomCharacter = randomNumber(1, 3);
  let characterPc = document.getElementById("character-pc");

  if (randomCharacter == 1) {
    characterPc.innerHTML = "Iceberg";
  } else if (randomCharacter == 2) {
    characterPc.innerHTML = "Aracrix";
  } else characterPc.innerHTML = "Drogon";
}

// seleccion de ataques del jugador

let fireButton = document.getElementById("fire-button");
fireButton.addEventListener("click", fireAttack);
let waterButton = document.getElementById("water-button");
waterButton.addEventListener("click", waterAttack);
let plantButton = document.getElementById("plant-button");
plantButton.addEventListener("click", plantAttack);

function fireAttack() {
  playerAttack = "FIRE ATTACK!";
  // alert(playerAttack);
  randomAttack();
}
function waterAttack() {
  playerAttack = "WATER ATTACK!";
  // alert(playerAttack);
  randomAttack();
}
function plantAttack() {
  playerAttack = "PLANT ATTACK!";
  // alert(playerAttack);
  randomAttack();
}

function randomAttack() {
  let pcAttack = randomNumber(1, 3);
  if (pcAttack == 1) {
    pcRandomAttack = "FIRE ATTACK!";
  } else if (pcAttack == 2) {
    pcRandomAttack = "WATER ATTACK!";
  } else pcRandomAttack = "PLANT ATTACK!";
  // alert(pcRandomAttack);

  combat();
}

function newMessage(result) {
  let sectionMessage = document.getElementById("comments");
  let message = document.createElement("p");
  message.innerHTML =
    " your pet choosed " +
    playerAttack +
    " your enemy choosed " +
    pcRandomAttack + " "
     result;

  sectionMessage.appendChild(message);
}

function combat() {
  let spanPlayerLifes = document.getElementById("player-lifes");
  let spanEnemyLifes = document.getElementById("enemy-lifes");

  if (playerAttack == pcRandomAttack) {
    newMessage("YOU TIE!");
  } else if (
    (playerAttack == "FIRE ATTACK!" && pcRandomAttack == "PLANT ATTACK!") ||
    (playerAttack == "WATER ATTACK!" && pcRandomAttack == "FIRE ATTACK!") ||
    (playerAttack == "PLANT ATTACK!" && pcRandomAttack == "WATER ATTACK!")
  ) {
    newMessage("YOU WIN!");
    enemyLifes--;
    spanEnemyLifes.innerHTML = enemyLifes;
  } else {
    newMessage("YOU LOSE");
    playerLifes--;
    spanPlayerLifes.innerHTML = playerLifes;
  }

  lifeCounter();
}

function lifeCounter() {
  if (playerLifes == 0) {
    finalMessage("oh no, you have lost the battle :(");
  } else if (enemyLifes == 0) {
    finalMessage("Congrats! you win the battle!");
  }
}

function finalMessage(finalResult) {

  let sectionRestartButton = document.getElementById("restart-button");
  sectionRestartButton.style.display = "block";

  let sectionMessage = document.getElementById("comments");
  let message = document.createElement("p");
  message.innerHTML = finalResult;
  sectionMessage.appendChild(message);

  let fireButton = document.getElementById("fire-button");
  fireButton.disabled = true;
  let waterButton = document.getElementById("water-button");
  waterButton.disabled = true;
  let plantButton = document.getElementById("plant-button");
  plantButton.disabled = true;
}

let restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restart);

function restart() {
  location.reload();
}
