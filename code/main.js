let playerAttack;
let pcRandomAttack;
let enemyLifes = 3;
let playerLifes = 3;

const Zephyr = document.getElementById("Zephyr");
const Thorne = document.getElementById("Thorne");
const Nyx = document.getElementById("Nyx");

const characterPc = document.getElementById("character-pc");

const fireButton = document.getElementById("fire-button");
const waterButton = document.getElementById("water-button");
const plantButton = document.getElementById("plant-button");

const sectionMessage = document.getElementById("result");

const sectionCharacter = document.getElementById("select-character");
const sectionAttack = document.getElementById("select-attack");

const spanPlayerLifes = document.getElementById("player-lifes");
const spanEnemyLifes = document.getElementById("enemy-lifes");

const restartButton = document.getElementById("restart-button");

const sectionRestartButton = document.getElementById("restart-button");
sectionRestartButton.style.display = "none";

sectionAttack.style.display = "none";

const buttonCharacter = document.getElementById("button-character");
buttonCharacter.addEventListener("click", playerCharacter);

function playerCharacter() {
  const $ = (selector) => document.getElementById(selector);

  let inputIceberg = $("Iceberg");
  let inputAracrix = $("Aracrix");
  let inputDrogon = $("Drogon");
  let playerCharacter = $("character-player");

  if (inputIceberg.checked) playerCharacter.innerHTML = "Zephyr";
  else if (inputAracrix.checked) playerCharacter.innerHTML = "Thorne";
  else if (inputDrogon.checked) playerCharacter.innerHTML = "Nyx";
  else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "Choose a character to start!",
    });
    return;
  }
  sectionCharacter.style.display = "none";
  sectionAttack.style.display = "flex";
  pcCharacter();
}

Zephyr.onclick = function () {
  functionZephyr();
};

Thorne.onclick = function () {
  functionThorne();
};

Nyx.onclick = function () {
  functionNyx();
};

function functionZephyr() {
  Thorne.classList.remove("playing");
  Nyx.classList.remove("playing");
  const zephyr = document.querySelector("#Zephyr");
  zephyr.classList.add("playing");
}

function functionThorne() {
  Zephyr.classList.remove("playing");
  Nyx.classList.remove("playing");
  const thorne = document.querySelector("#Thorne");
  thorne.classList.add("playing");
}

function functionNyx() {
  Zephyr.classList.remove("playing");
  Thorne.classList.remove("playing");
  const nyx = document.querySelector("#Nyx");
  nyx.classList.add("playing");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pcCharacter() {
  let randomCharacter = randomNumber(1, 3);

  if (randomCharacter == 1) {
    characterPc.innerHTML = "Zephyr";
  } else if (randomCharacter == 2) {
    characterPc.innerHTML = "Thorne";
  } else characterPc.innerHTML = "Nyx";
}

fireButton.addEventListener("click", fireAttack);
waterButton.addEventListener("click", waterAttack);
plantButton.addEventListener("click", plantAttack);

function fireAttack() {
  playerAttack = "FIRE ATTACK!";
  randomAttack();
}
function waterAttack() {
  playerAttack = "WATER ATTACK!";
  randomAttack();
}
function plantAttack() {
  playerAttack = "PLANT ATTACK!";
  randomAttack();
}

function randomAttack() {
  let pcAttack = randomNumber(1, 3);
  if (pcAttack == 1) {
    pcRandomAttack = "FIRE ATTACK!";
  } else if (pcAttack == 2) {
    pcRandomAttack = "WATER ATTACK!";
  } else pcRandomAttack = "PLANT ATTACK!";

  combat();
}

function newMessage(result) {
  sectionMessage.innerHTML = result;
}

function combat() {
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
    finalMessage(
      "oh no, you have lost the battle :( but not the war, try again!");
  } else if (enemyLifes == 0) {
    finalMessage("Congrats! you win the battle!");
  }
}

function finalMessage(finalResult) {
 
  sectionRestartButton.style.display = "flex";
  let message = document.createElement("p");
  message.innerHTML = finalResult;
  sectionMessage.appendChild(message);

  fireButton.disabled = true;
  waterButton.disabled = true;
  plantButton.disabled = true;
}

restartButton.addEventListener("click", restart);
function restart() {
  location.reload();
}
