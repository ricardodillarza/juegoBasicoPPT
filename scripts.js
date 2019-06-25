
const gameForm = document.querySelector('#game-form');
const labels = document.querySelectorAll(".poder");

const ganador = document.querySelector('.ganador');
const player1Pick = document.querySelector('.player1-pick');
const player2Pick = document.querySelector('.player2-pick');
const player1Img = document.querySelector('.player1-img');
const player2Img = document.querySelector('.player2-img');

//SECTIONS
const resultSection = document.querySelector('.anuncio-ganador');
const eleccionPoderes = document.querySelector('.eleccion-poderes');

//LO QUE QUITO DE PANTALLA PARA DAR AL GANADOR

const header = document.querySelector("header");
const titulo = document.querySelector(".titulo");

function juego() {
  const computerSelection = computerPick();
  const playerSelection = gameForm.selection.value;
  const ganadorInfo = jugar(playerSelection, computerSelection);
  imprimeGanador(ganadorInfo);
}

function computerPick() {
  const options = ['Hamehameha', 'Kienzan', 'BigBang'];
  let computerSelection = Math.floor(Math.random() * 2.99);
  computerSelection = options[computerSelection];
  return computerSelection;
}

function jugar (player1, player2) {
  if(player1 === 'Hamehameha' && player2 === 'BigBang' ||
     player1 === 'BigBang' && player2 === 'Kienzan' ||
     player1 === 'Kienzan' && player2 === 'Hamehameha' ){
    return {
      ganador: 'Jugador 1',
      player1Pick: player1,
      player2Pick: player2
    }
  } else if(player1 === 'BigBang' && player2 === 'Hamehameha' ||
            player1 === 'Kienzan' && player2 === 'BigBang' ||
            player1 === 'Hamehameha' && player2 === 'Kienzan'){
      return {
        ganador: 'Jugador 2',
        player1Pick: player1,
        player2Pick: player2
      }
  } else {
    return {
      ganador: 'Nadie, porque es un empate.',
      player1Pick: player1,
      player2Pick: player2
    }
  }
}

function imprimeGanador(ganadorInfo) {
  //header.style.display = "none";
  titulo.style.display = "none";
  eleccionPoderes.style.display = 'none';
  resultSection.style.display = 'block';
  ganador.innerText = 'El ganador de las esferas del dragon es: \n' + ganadorInfo.ganador;
  player1Pick.innerText = ganadorInfo.player1Pick;
  player2Pick.innerText = ganadorInfo.player2Pick;
  player1Img.src = 'DragonBall/' + ganadorInfo.player1Pick + '.jpg';
  player2Img.src = 'DragonBall/' + ganadorInfo.player2Pick + '.jpg';
}

for(let i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", function() {
    for(let k = 0; k < labels.length; k++) {
      labels[k].classList.remove("active");
    }
    labels[i].classList.add("active");
  });
}
