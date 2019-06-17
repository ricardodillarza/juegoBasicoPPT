

const playerInput = document.querySelector("#player-input"); // prueba vs compu


const player1Input = document.querySelector("#player1-input");
const player2Input = document.querySelector("#player2-input");


const ganador = document.querySelector(".ganador");

/*function iniciarJuego() {
  const options = ["piedra", "papel", "tijeras"];
  let computerSelection = Math.floor(Math.random() * 2.99);  // Sacamos un 0,1 o 2.

  computerSelection = options[computerSelection];

  const playerSelection = playerInput.value; // piedra, papel o tijeras   vs compu

*/
//JUEGO DE DOS JUGADORES


function juego() {
  const options = ["piedra", "papel", "tijeras"];
  const playerSelection1 = player1Input.value;
  const playerSelection2 = player2Input.value;

  console.log("jugador1:", playerSelection1);
  console.log("jugador2:", playerSelection2);

  if(playerSelection1 === playerSelection2) {
    ganador.innerText = "¡Empate! Vuelvan a jugar.";
  } else if (playerSelection1 === "papel" && playerSelection2 === "piedra") {
    ganador.innerText = "¡El jugador 1 gana!";
  } else if (playerSelection1 === "tijeras" && playerSelection2 === "papel") {
    ganador.innerText = "¡El jugador 1 gana!";
  }  else if (playerSelection1 === "piedra" && playerSelection2 === "tijeras") {
      ganador.innerText = "¡El jugador 1 gana!";
  } else if (playerSelection1 === "piedra" && playerSelection2 === "papel") {   //AQUI PIERDES
    ganador.innerText = "¡El jugador 2 gana!";
  } else if (playerSelection1 === "papel" && playerSelection2 === "tijeras") {
    ganador.innerText = "¡El jugador 2 gana!";
  } else if (playerSelection1 === "tijeras" && playerSelection2 === "piedra") {
    ganador.innerText = "¡El jugador 2 gana!";
  }
}













/*
//JUEGO VS COMPUTADORA

  if(playerSelection === computerSelection) {
    ganador.innerText = "Empate, vuelve a intentar.";
  } else if (playerSelection === "papel" && computerSelection === "piedra") {
    ganador.innerText = "Le ganaste a la computadora.";
  } else if (playerSelection === "tijeras" && computerSelection === "papel") {
    ganador.innerText = "Le ganaste a la computadora.";
  }  else if (playerSelection === "piedra" && computerSelection === "tijeras") {
      ganador.innerText = "Le ganaste a la computadora.";
  } else if (playerSelection === "piedra" && computerSelection === "papel") {   //AQUI PIERDES
    ganador.innerText = "Perdiste contra la computadora.";
  } else if (playerSelection === "papel" && computerSelection === "tijeras") {
    ganador.innerText = "Perdiste contra la computadora.";
  } else if (playerSelection === "tijeras" && computerSelection === "piedra") {
    ganador.innerText = "Perdiste contra la computadora.";
  }
}

console.log("jugador:", playerSelection);
console.log("computadora:", computerSelection);
*/
