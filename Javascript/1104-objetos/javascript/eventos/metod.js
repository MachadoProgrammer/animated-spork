// Métodos e propriedades de elementos.
// Um método é uma função dentro de um objeto.
// Dentro do método, o 'this' faz referência ao objeto.
const curso = {
  nome: "Javascript",
  completar() {
    console.log(this.nome + " Completo!");
  },
};

curso.completar();
