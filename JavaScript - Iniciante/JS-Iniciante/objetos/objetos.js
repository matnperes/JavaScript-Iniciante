//Objetos são um conjunto de propriedades composta por funções e variaveis  

var pessoa = {
  nome: 'Matheus',
  idade: 19,
  profissão: 'Programador',
  possuiFaculdade: true,
}

console.log(pessoa.nome)

//para acessar prorpiedades do objeto internamente, é necessario utilizar a palavra chave que faz referencia ao objeto: THIS. 
// var quadrado = {
//   cor: "Amarelo",
//   lados: 4,
//   area: function(lado){
//     return lado*lado;
//   },
//   perimetro: function(lado){
//     return lado * this.lados
//   }
// }

// console.log(quadrado.area(5))
// console.log(quadrado.perimetro(5))

//A partir do JS ES6+ é possivel abreviar o metodo dentro de um objeto de: NOME: FUNCTION(){} para: NOME(){}

var quadrado = {
  cor: "Amarelo",
  lados: 4,
  area(lado){
    return lado*lado;
  },
  perimetro(lado){
    return lado * this.lados
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

//para cirar objetos, basta digitar var nome = {}
//Para editar um valor contido no objeto basta digitar o caminho da propriedade e atribuir o valor.
//Para adicionar uma proporiedade em um objeto basta digitar, nome.novaPropriedade = valor . Se caso já existir,o valor apenas será alterado.