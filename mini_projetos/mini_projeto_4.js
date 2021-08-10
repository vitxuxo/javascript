//Velocidade Maxima de até 70
// a cada 5 km acima do limite ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 -> carteira suspensa
verificarVelocidade(80);
let limite = 70;
let kmPorPonto = 5;
let pontoMaximo = 12;

function verificarVelocidade(velocidade) {
  if (velocidade <= limite) {
    console.log("OK!");
  } else {
    let pontos = Math.floor((velocidade - limite) / kmPorPonto);
    if (pontos >= pontoMaximo) {
      console.log("Carteira Suspensa");
    } else {
      console.log("Voce tem " + pontos + " pontos na carteira");
    }
  }
}
