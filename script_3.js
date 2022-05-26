// Un prompt s'affiche avec la question suivante : 
let input = prompt("Hé Sidi, tu veux combien d'étages à ta pyramide ?");



function createHalfPyramid(input) {
  
  for (var i = 1; i <= input; i++) {
    var row = '';
    
    for (var j = 1; j <= (input - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '*';
    }
    
    console.log(row);
  }
}

createHalfPyramid(input);