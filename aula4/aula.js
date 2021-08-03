// funçao = Verbo + substantivo
let corSite = "azul";

function resetaCor(){
    corSite = "";
}
//console.log(corSite);
// resetaCor();
// console.log(corSite);


function trocaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
}

// console.log(corSite);
// trocaCor("vermelho", "vinho");
// console.log(corSite);

// tipos de funçoes
// Realiza e nao retorna nada
function dizerNome(){
    console.log("vitor");
}

dizerNome();

// Realiza e te retorna algum valor
function multiplicarNumero(valor){
    return console.log(valor * 2);
}

multiplicarNumero(5);

let resultado = multiplicarNumero(5);

resultado;