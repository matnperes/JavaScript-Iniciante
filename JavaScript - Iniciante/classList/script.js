const section = document.querySelector('section');

section.className // string
section.classList; // list of class
section.classList.add('ativo');
section.classList.add('ativo', 'mobile'); // two classe
section.classList.remove('ativo');
section.classList.toggle('ativo'); // add/remove class
section.classList.contains('ativo'); // true ou false
section.classList.replace('ativo', 'inativo');

const animais = document.querySelector('.animais');

section.attributes; // return all attributes
section.attributes[0]; // retorn the first attributes
section.attributes['id']; //return attributes of de id

const img = document.querySelector('img');

img.getAttribute('src'); // value of src
img.setAttribute('alt', 'Texto Alternativo'); // create or update alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove of alt

img.hasAttributes(); // true / false sif has  a attribute

// There are properties that do not allow changing their values, these are considered Read Only.

const animais = document.querySelector('.animais');

animais.className; // string with name of class
animais.className = 'azul'; // replace the string
animais.className += ' red'; // add red to string

animais.attributes = 'class="ativo"'; // doesn't work, read-only

// Important: we can modify the value of a property objeto.propriedade = ''

