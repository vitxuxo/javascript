// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// divisivel pelos dois => FizzBuzz
// nao divisivel por 3 e 5 => retorna o mesmo valor
let resultado = fizzBuzz(38);
console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") {
    return "Nao é um numero";
  } else if (entrada % 3 === 0 && entrada % 5 === 0) {
    return "FizzBuzz";
  } else if (entrada % 5 === 0) {
    return "Buzz";
  } else if (entrada % 3 === 0) {
    return "Fizz";
  } else {
    return entrada;
  }
}
