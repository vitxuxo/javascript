//Condiçao

//If...Else

//Se a hora estiver entre 06 ate 12:00 : Bom Dia
// se estiver entre 12:00 até 18:00 : Boa tarde
// se estiver entre 18:00 ate 0:00 : Boa noite
// caso contrario : Boa Madrugada.

// if (condition) {
//     // codigo a ser executado
// }else if (condition) {
//     // codigo a ser executado
// }else{
//     // codigo a ser executado
// }

// let hora = 21;

// if (hora > 6 && hora < 12) {
//     console.log("Bom dia");
// }else if (hora >= 12 && hora < 18) {
//     console.log("Boa tarde");
// }else if(hora >= 18 && hora < 24){
//     console.log("Boa noite");
// }else{
//     console.log("Boa madrugada");
// }

// // Switch .... case
// let permissao; //comum, gerente, diretor
// permissao = 'diretor';
// switch (permissao) {
//     case 'comum':
//         console.log('usuario comum');
//         break;
//     case 'gerente':
//         console.log('usuario gerente');
//         break;
//     case 'diretor':
//         console.log('usuario diretor');
//         break;
//     default:
//         console.log('quem é tu?')
//         break;
// }

// // // Laço/Loop
// // For()
// for (let i = 0; i < 5; i++) {
//     console.log('Estou aprendendo', i)
// }

// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// // While()
// let i = 5;
// while (i >= 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i--;
// }

// // Do ... while()
// let i = 1;
// do {
//   if (i % 2 !== 0) {
//     console.log("Digitando", i);
//   }
//   i++;
// } while (i < 10);

// // For in() para objetos ou arrays
// const pessoa = {
//   nome: "Vitor",
//   idade: 28,
// };

// for (let chave in pessoa) {
//   console.log(chave, pessoa);
// }

// const cores = ["vermelho", "amarelo", "verde", "azul", "laranja", "roxo"];

// for (let indice in cores) {
//   console.log(indice, cores[indice]);
// }

// // For of() para arrays
// const cores = ["vermelho", "amarelo", "verde", "azul", "laranja", "roxo"];

// for (let cor of cores) {
//   console.log(cor);
// }
