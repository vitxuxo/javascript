// Receber uma quantidade de valores para avaliar
// funcao exibe se cada valor é par ou impar

exibirParImpar(10);

function exibirParImpar(limite) {
  for (let index = 0; index <= limite; index++) {
    if (index % 2 === 0) {
      console.log("par" + " " + index);
    } else {
      console.log("impar" + " " + index);
    }
  }
}
