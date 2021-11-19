// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome


var eu = {
  nome: 'Matheus',
  sobrenome: 'Nobre',
  idade: 19,
}


// Crie um método no objeto anteriro, que mostre o seu nome completo

eu.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

console.log(eu.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  idade: 10,
  late(pessoa){
     if(pessoa === 'homem'){
       return 'AuAuAu';
     } else {
      return 'mansinho'
     }
  }
}

console.log(`O cachorro é da raça ${cachorro.raca}, tem ${cachorro.idade} anos, e faz ${cachorro.late("homem")} se ver um homem, caso contrario ele fica ${cachorro.late()}`)


// TUDO É OBJETO. 
//Trabalhar bem com JavaScript é entender e dominar a utilização dos métodos de um objeto. A maioria das entidades herdam propriedades e metodos. ex:
//var.replace(esse, por esse); mostra como fica se modificado o valor contido na variavel
//var.toString(); Transforma o valor em String

 var btn = document.querySelector('.btn'); // aqui estamos definindo a classe presente no documetno HTML como uma variavel em nosso script.

 btn.addEventListener('click', function(){
   window.alert("´poii");
 })


// nomeie 3 propriedades ou métodos de strings

// charAt(); retorna o caractere ocpando a posição declarada como argumento
// length; retorna a quantidade de caracteres
// toLowerCase(); deixa tudo minusculo
// toUpperCase(); deixa tudo maiusculo

// nomeie 5 propriedades ou métodos de elementos do DOM

// addEventListener(); 
// innerHtml
// appendChild
// id
//outerHtml

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//clipboard.js
