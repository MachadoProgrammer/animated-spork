function logCurso(nome, horas) {
  console.log(nome, horas);
  return {
    nome,
    horas,
  };
}

const retorno = logCurso("Javascript", 40);
console.log(retorno);
