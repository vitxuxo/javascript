//Faça um programa que leia 3 números, some-os e exiba a média entre eles.

let numero1 = parseInt(prompt());
let numero2 = parseInt(prompt());
let numero3 = parseInt(prompt());

function mediaEntre2() {
  console.log((numero1 + numero2) / 2);
}

function mediaEntre3() {
  console.log((numero1 + numero2 + numero3) / 3);
}

mediaEntre2();
mediaEntre3();
