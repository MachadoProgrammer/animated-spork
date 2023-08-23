// Podemos adicionar funções que serão executadas caso um evento ocorra.

// O evento ocorre no documento inteiro ou no elemento do dom.

// Usamos o "método addEventListener" para adicionar eventos.

const ativar = document.querySelector(".ativar");
console.log(ativar);

/**  @param {MouseEvent} event */
function ativarAoClick(event) {
  console.log(event.x, event.y);
}

ativar.addEventListener("click", ativarAoClick);
