// // //Operadores aritimeticos
let salario = 100;
// + = soma, - diminui, * multiplica, / divide, ** exponencial
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log((salario ** salario).toLocaleString(20));

// // // ++ -- Operadores de Incremento
// function crescer(){
//     idade = 18;
//     idade++;
//     console.log(idade);
// }
// crescer();
// OU
// let idade = 19;
// console.log(--idade);

// // //Operadores de Atribuiçao
// = atribui um valor ou algo, += é somar o valor anterior com ele mesmo, -= é diminuir o valor por ele mesmo.

// // //Operadores de Comparaçao
// //Operadores de Igualdade
// //Igualdade restrita
// console.log(1===1); // compara alem do valor, o tipo da variavel.

// //Igualdade Solta
//console.log(1==1);

// //Operador Ternario
// let pontos = 200;
// let tipo = pontos > 100 ? 'premium' : 'comum'
// console.log(tipo);

// // //Operadores Logicos
// // Operador Logico e (&&)
// // Retorna True se os dois forem True
// console.log(true && true);
// console.log(true && false);

// function trabalhar(idade){
//     idade = 14;
//     console.log(idade >= 16 ? "nao pode trabalhar" : "precisa ter 18 anos");
//     let empresaContrataAprendiz = true;
//     let menorDeIdade = true;
//     let podeInscrever = empresaContrataAprendiz && menorDeIdade;
//     console.log(idade < 18 && idade >= 14? podeInscrever : "nao tem idade pra ser aprendiz");
// }

// trabalhar();

// // Operador Logico ou (||)

//  function trabalhar(idade){
//      idade = 14;
//      console.log(idade >= 16 ? "nao pode trabalhar" : "precisa ter 18 anos");
//      let empresaContrataAprendiz = true;
//      let menorDeIdade = true;
//      let podeInscrever = empresaContrataAprendiz && menorDeIdade;
//      console.log(idade < 18 || idade >= 14? podeInscrever : "nao tem idade pra ser aprendiz");
//  }
//  trabalhar();

// // Operador Logico not (!)

//   function trabalhar(idade){
//      idade = 14;
//       console.log(idade >= 16 ? "nao pode trabalhar" : "precisa ter 18 anos");
//       let empresaContrataAprendiz = true;
//       let menorDeIdade = true;
//       let maiorDeIdade = true;
//       let podeInscrever = empresaContrataAprendiz && menorDeIdade;
//       console.log(idade < 18 || idade >= 14? podeInscrever : "nao tem idade pra ser aprendiz");
//       podeAplicar = !maiorDeIdade;
//       console.log(idade <= 13? "pode aplicar?: " + podeAplicar : "quantos anos ele tem?" + ' ' + idade)
//   }
//   trabalhar();

// // Operadores nao Booleanos
// // Falsy(undefined, null, 0, false, '', NaN)
// // Truthy(todos que nao sao Falsy)
//console.log(false || 1 || 3); // sempre verifica so a primeira comparaçao
// let corPersonalizada = "";
// let corPadrao = "Azul";
// let corPerfil = corPersonalizada || corPadrao;
// console.log(corPerfil);

// // //Operadores Bitwise
