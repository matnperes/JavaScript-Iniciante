// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img');
const imgTop = primeiraImg.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
const imgs = document.querySelectorAll('img');
let soma = 0;
imgs.forEach((i)=>{
  soma += i.offsetWidth;
})
console.log(soma)
}

window.onload = function(){
  somaImagens()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((i) => {
  const linkWidth = i.offsetWidth;
  const linkHeight = i.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log('Possui o mínimo recomendável')
  } else{
    console.log('não possui o mínimo recomendável')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector('nav');
const mobile = window.matchMedia('(max-width: 600px)')

if(mobile.matches){
  menu.classList.add('menu-mobile')
}
  
