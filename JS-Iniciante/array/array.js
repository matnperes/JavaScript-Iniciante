//ARRAY é um grupo de valores geralmente relacionados . Servem para guardarmos diferentes valores em uma única variável.


var videoGames = ['Switch', 'PS4', 'Xbox',];

videoGames[0]; // Switch
videoGames[1]; //PS4

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console
//O for loop possui 3 partes, início, condição e incremento

// var i = 10;
// while (i < 20) {
//   console.log(i);
//   i++;
// }
// Retorna de 0 a 9 no console

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
// Podemos passar os seguintes parâmetros item, index(index do item) e array