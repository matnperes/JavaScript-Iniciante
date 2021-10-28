// Crie uma função para verificar se um valor é Truthy

function verficaBoolean(valor){
  return !!valor
}

console.log(verficaBoolean('1'))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
  var perimetro = lado * 4;
  return perimetro;
}
console.log(perimetroQuadrado(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
  return `${nome  } ${sobrenome}`;
}

console.log(nomeCompleto('Matheus ', 'Nobre'))

// Crie uma função que verifica se um número é par

function verificaPar(num){
  if(num%2 === 0){
    return "É par";
  } else {
    return "Não é par"
  }
}

console.log(verificaPar(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verficaTipo(arg){
  return typeof arg;
}

console.log(verficaTipo("Olá"))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener ('scroll', function(){
  return console.log(nomeCompleto('Matheus  ', 'Nobre'))
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(190));
console.log(jaVisitei(190));

