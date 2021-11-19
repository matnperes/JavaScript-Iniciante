const listaAnimais = document.querySelector('.animais-lista');

listaAnimais.clientHeight; // height + padding
listaAnimais.offsetHeight; // height + padding + border
listaAnimais.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth ...

const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
console.log(section.offsetTop);

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;


// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const primeiroH2 = document.querySelector('h2');

const rect = primeiroH2.getBoundingClientRect();


console.log(
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerHeight, // soma a barra de endereço

window.pageYOffset, // distância total do scroll horizontal
window.pageXOffset, // distância total do scroll vertical
)

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}


// MATCHMEDIA();
// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 00px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

console.log(small)