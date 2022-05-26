// Un prompt s'affiche avec la question suivante : "De quel nombre veux-tu calculer la factorielle ?"
let input = prompt("De quel nombre veux-tu calculer la factorielle ?");


// Utilisateur rentre un nombre (par ex: 4)
let i = input - 1;
  console.log(input);
  console.log(i);

 
// On défini une fonction pour calculer la factorielle d'un nbre donné :
function factorialize(input) {
  var result = input;
  if (input === 0 || input === 1) 
    return 1; 
  while (input > 1) { 
    input--;
    result *= input;
  }
  return result;
}


// Dans la console le résultat suivant est affiché : "Le résultat (factorielle) est : 24"
factorialize(input);
  console.log(factorialize(input));





