const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 1: 
console.log("Q1: Est-ce que tous les livres ont été au moins empruntés une fois ?")

arr_new_list = []

for(let i = 0; i < books.length; i++) { // <= on itère sur chaque livre de l'array de l'énoncé
  if(books[i].rented === 0) {
    arr_new_list.push(books[i].title) // on met dans un nouvel array tous les livres n'ayant jamais été loués (aucun)
  }
}

let not_rented = arr_new_list.length // on mesure le nbre d'éléments dans le nouvel array

console.log(not_rented + " livres n'ont pas été empruntés.") // on affiche le résultat dans la console avec une phrase.
console.log("* ".repeat(35))

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 2: 
console.log("Q2: Quel est livre le plus emprunté ?")



console.log("* ".repeat(35))


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 3:
console.log("Q3: Quel est livre le moins emprunté ?")



console.log("* ".repeat(35))


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 4: 
console.log("Q4: Trouve le livre avec l'ID: 873495")


console.log("* ".repeat(35))


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 5:
console.log("Q5: Supprime le livre avec l'ID: 133712")


console.log("* ".repeat(35))


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 6: 
console.log("Q6: Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")