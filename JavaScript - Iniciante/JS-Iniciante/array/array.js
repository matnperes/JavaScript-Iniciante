//ARRAY it's a group of values generally related. Serve to store different values ​​in a single variable.


var videoGames = ['Switch', 'PS4', 'Xbox',];

videoGames[0]; // Switch
videoGames[1]; //PS4

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove the last item and return it 
videoGames.push('3DS'); //  Add in end of array
videoGames.length; // 3

for (var number = 0; number < 10; number++) {
  console.log(number);
}
// Return 0 to 9 on consol
// The for loop has 3 parts, start, condition and increment

// var i = 10;
// while (i < 20) {
//   console.log(i);
//   i++;
// }
// Return 0 to 9 on consol

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// item argument will be dynamically assigned
// We can pass the following parameters item, index and array