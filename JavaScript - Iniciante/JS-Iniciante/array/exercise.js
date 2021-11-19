// Create a array with the years that Brazil won a World Cup
// 1959, 1962, 1970, 1994, 2002

var champ = [1959, 1962, 1970, 1994, 2000]

// interact with array using a loop, to display the following message on the consol `Brazil was champion in ${year}`

for(var p=0; p < champ.length; p++){
  console.log(`Brazil was champion in ${champ[p]}`)
}

// Interact with a loop of the fruits below and stop when you reach Pear
var fruits = ['Banana', 'litter', 'pear', 'grape', 'watermelon']

for(var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
  if(fruits[i] === 'Pera'){
    break;
  }
}
// Insert the last fruit of the array above in a variable without removing it

var lastFruit = fruits[fruits.length-1]

console.log(lastFruit)