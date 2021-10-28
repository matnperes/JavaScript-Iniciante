const imgs = document.querySelectorAll('img');
console.log(imgs)

imgs.forEach(function(i, index){
  console.log(i, index);
}) // No forEach retornará todos os itens da seleção, como se fosse um loop, após chamar o metodo, devemos colocar uma função anonima com os seguintes parametros: Item( retornará o item da vez), Index (retornará a posição do item na array) e array (mostrará toda a array). apenas node list/ html collection n 


const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);

tituloArray.forEach(function(i){
  console.log(i)
})

//Arrow Function serve para encurtarmos a sintaxe. Trocaremos o forEach(function(){}) para forEach(() => {}). A sintaxe tem uma particularidade, onde se existir apenas um parametro, funcionará sem parenteses