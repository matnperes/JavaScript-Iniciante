// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function impClasse(event){
  event.preventDefault();
  links.forEach((i) =>{
    i.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo')
}


links.forEach((i) =>{
i.addEventListener('click', impClasse)
})

// Selecione todos os elementos do  site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const body1 = document.body;

// body1.addEventListener('click', function(event){
//   console.log(event.target);
// })

const todosElementos = document.querySelectorAll('body *')

todosElementos.forEach((i) =>{
  i.addEventListener('click', function(event){
    console.log(event.currentTarget);
  })
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const body = document.body;

body.addEventListener('click', function(event){
  let elemento = event.target;
  elemento.remove();
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const pagina = document.body;

function aumentarTexto(event){
  if(event.key==='t'){
    pagina.classList.toggle('fonte-aumentada');
  }
}

pagina.addEventListener('keydown', aumentarTexto);

