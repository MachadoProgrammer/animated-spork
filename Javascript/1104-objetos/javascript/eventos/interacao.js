const botao = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
}

botao.addEventListener("click", mostrar);

// const ativar = document.querySelector(".ativar");

/** @param {MouseEvent} event */
// function ativarAoClick(event) {
//   console.log(event);

//   const elemento = event.currentTarget;
//   const posicaoMouse = {
//     x: event.x,
//     y: event.y,
//   };
//   const tempoPassado = event.timeStamp;

//   console.log(elemento);
//   console.log(posicaoMouse);
//   console.log(tempoPassado);
// }

// ativar.addEventListener("click", ativarAoClick);

// const ativar = document.querySelector(".ativar");

// function ativarAoClick(event) {
//   console.log(event.timeStamp);
// }

// ativar.addEventListener("click", ativarAoClick);

function myFunc() {
  console.log("rolou");
}

window.addEventListener("scroll", myFunc);

function coordenadasMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}
window.addEventListener("mousemove", coordenadasMouse);
