//Arrays e objetos que se parecem com Array's, possuem o método forEach. Esse método recebe uma função que é executada para cada item da Array.

const lista = ["JavaScript", "HTML", "CSS"];
const body = document.querySelector("body");

function logarItems(item, index) {
  body.innerHTML += `<p>${item} no index: ${index}</p>`;
  console.log(item, "no index:", index);
}

lista.forEach(logarItems);

// você pode escrever a função no argumento:
lista.forEach(function (item, index) {
  body.innerHTML += "<li>" + item + "</li>";
  console.log(item, "no index:", index);
});

//O método document.querySelectorAll(), seleciona todos os elementos que suprirem a condição do argumento e retorna uma array-like (objeto que se parece com uma array).

// transforma uma array-like em uma array = Array.from()

const links = Array.from(document.querySelectorAll("nav a"));

const ultimoLink = links.pop();

function logHref(item) {
  const href = item.href;
  console.log(item);
}

links.forEach(logHref);

console.log(links[links.length - 1]);

links.forEach(function (item) {
  const href = item.href;
  console.log(links[links.length - 1]);
  console.log(href);
});

// Metodos e Propriedades de Array's

const listaP = ["JavaScript", "HTML", "CSS"];

// retorna o total
const total = listaP.length;

// remove o último
const ultimo = listaP.pop();

// remove o primeiros
const primeiro = listaP.shift();

// adiciona ao final
listaP.push("PHP");

console.log(listaP);
