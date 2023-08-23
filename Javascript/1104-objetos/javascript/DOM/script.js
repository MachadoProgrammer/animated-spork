// Variáveis, 3 formas; const, let e var.

// const nome = "Javascript";
// console.log("nome");

// Manipular o DOM

const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

console.log(nav);
console.log(produtos);

console.log(produtos.innerHTML);

nav.style.backgroundColor = "black";
nav.style.padding = "1rem";

nav.classList.add("ativo");
