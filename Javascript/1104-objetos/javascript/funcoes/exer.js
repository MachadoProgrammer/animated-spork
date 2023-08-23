// function Book(nome, ano, autor) {
//   return {
//     nome: nome.toUpperCase(),
//     totalAno: 2050 - ano,
//     frase: `nome do livro é ${nome} e o autor é ${autor}`,
//   };
// }

// const bookRetorno = Book("O senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(bookRetorno.frase);

function livro(nome, ano, autor) {
  // se nao for reutilizar a variavel, nao precisa declarar
  const nomeGrande = nome.toUpperCase();
  const totalAno = 2050 - ano;
  const frase = nome + " por " + autor;
  const total = {
    nome: nomeGrande,
    totalAno,
    frase,
  };
  return total;
}

const livroRetorno = livro("O senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase);
