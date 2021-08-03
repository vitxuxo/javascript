// Escreva uma funçao que usa 2 numeros e retorna o maior entre eles.

let numero1 = 9;
let numero2 = 20;

function maiorQue() {
  if (numero1 > numero2) {
    console.log("esse é o maior!", numero1);
  } else {
    console.log("esse é o maior!", numero2);
  }
}

function menorQue() {
  if (numero1 < numero2) {
    console.log("esse é o menor!", numero1);
  } else {
    console.log("esse é o menor!", numero2);
  }
}

maiorQue();
menorQue();
