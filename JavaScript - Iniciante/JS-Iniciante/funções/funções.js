function corFavortia(cor){
  if( cor === 'azul'){
    return console.log("Você tem afinidade com o céu");
  } else if(cor === 'verde'){
    return console.log("Você tem afinidade com a natureza");
  } else{
    console.log("Você não gosta de nenhuma cor");
  }
}

console.log(corFavortia('roxo'))


addEventListener ('click', function(){
  console.log('clicou')

}); 

function areaQuadrado(lado){
 let area = lado * lado;
 console.log('A area do quadrado é: ' + area)
}

console.log(areaQuadrado(5)) // retornará undefined pois já existe um console.log dentro da função  

function areaQuadrado2(lado){
  let area = lado * lado;
  return ('A area do quadrado é: ' + area)
 }

 console.log(areaQuadrado2(5)) // não retornará undefined pois dentro da função temos apenas o return, é como se o valor ficasse à deriva no código e o console.log o trouxesse para dentro da interface visivel.


 function dados(){
   var nome = 'Matheus';
   var idade = 19; // a cor cinza no nome da variável se da pelo fato de que não esta sendo utilizada
    function outrosDados(){ //podemos utilizar uma função dentro de uma função, ela só não estará disponivel para ser utilizada fora disto.
      var endereço = "São Paulo";
      var idade = 18; //Esta variavel irá sobrescrever a variavel idade.
      return `${nome}, ${idade}, ${endereço}`;
    }

  return outrosDados(); // Precisaremos "ativar" esta função, para que possamso puxar ela para fora.
 }

 console.log(dados())

 //todas as funções sobem para a memoria antes do programa ser carregado, então qualquer "chamada" de uma função será normalmente utilizada independente de sua posição no código