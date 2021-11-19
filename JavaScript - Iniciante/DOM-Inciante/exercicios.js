// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector(".ativo")
console.log(ativo)

const ativo1 = document.querySelectorAll(".ativo")
console.log(ativo1[0])

// Retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem)


// Retorne a largura da janela 
const larguraPagina =  window.innerWidth;
console.log(larguraPagina);