let buttonCharacter = document.getElementById("button-character");
buttonCharacter.addEventListener("click", playerCharacter); //VARIABLE PARA LA FUNCION QUE DARA PASO LUEGO DE SELECCIONAR A LOS PERSONAJES PARA JUGAR

function playerCharacter() {
  const $ = (selector) => document.getElementById(selector); // $ para simplificar el codigo y evitar escribir document.getElementById tantas veces

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
  let randomAttack = randomNumber(1, 3);
  let characterPc = document.getElementById("character-pc");

  if (randomAttack == 1) {
    characterPc.innerHTML = "Iceberg";
  } else if (randomAttack == 2) {
    characterPc.innerHTML = "Aracrix"
  } else if (randomAttack == 3) {
    characterPc.innerHTML = "Drogon"
  } else (characterPc.innerHTML = " ");
}   
