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
console.log("Q1: Est-ce que tous les livres ont été au moins empruntés une fois ?");

arr_new_list = []

for(let i = 0; i < books.length; i++) { // <= on itère sur chaque livre de l'array de l'énoncé.
  if(books[i].rented === 0) {
    arr_new_list.push(books[i].title) // on met dans un nouvel array tous les livres n'ayant jamais été loués.
  }
}

let not_rented = arr_new_list.length; // on mesure le nbre d'éléments dans le nouvel array.

console.log(not_rented + " livres n'ont pas été empruntés."); // on affiche le résultat dans la console avec une phrase.
console.log("* ".repeat(35));
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 2: 
console.log("Q2: Quel est livre le plus emprunté ?");

books.sort((a, b) => { // on utilise '.sort' pour trier les objets au sein de l'array.
  return b.rented - a.rented; // ici, faire 'b - a' permet de trier dans l'ordre décroissant.
});

console.log(`le livre le plus emprunté est celui avec l'ID: ${books[0].id}`); // attention à bien utiliser le genre d'apostrophe via 'AltGr + 7' !!!

console.log("* ".repeat(35));
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 3:
console.log("Q3: Quel est livre le moins emprunté ?")

books.sort((a, b) => { // on utilise '.sort' pour trier les objets au sein de l'array.
  return a.rented - b.rented; // 'a.rented - b.rented' -> tri ordre croissant.
});

console.log(`le livre le moins emprunté est celui avec l'ID: ${books[0].id}`); // attention à bien utiliser le genre d'apostrophe via 'AltGr + 7' !!!

console.log("* ".repeat(35));
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 4: 
console.log("Q4: Trouve le livre avec l'ID: 873495")

function search_book(id) { // definir une fonction qui va itérer parmi chaque objet de l'array:
  for(let i = 0; i < books.length; i++) {
    if(books[i].id == id) { // si l'ID du livre correspond à l'ID que l'on cherche...
      return (books[i].title); // ... on retourne dans la console le titre du livre en question
    } 
  }
}

book = search_book(873495); // on indique l'ID du livre qu'on recherche...
console.log("Le livre ayant l'ID 873495 est : " + book); // ...et on utilise notre fonction !

console.log("* ".repeat(35));
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 5:
console.log("Q5: Supprime le livre avec l'ID: 133712");

initial_size_of_array = books.length;
console.log("il y a pour le moment : " + books.length + " livres dans le tableau/l'array.");

book_to_delete = search_book(133712);
console.log("le livre à supprimer est : " + book_to_delete);
console.log(" ")

let arrayWithoutBookId133712 = books.filter(function (item) {
  return item.id != 133712
});

console.log("Pif! Paf! Pouf! Tadaaa, voila maintenant on n'a plus que : " + arrayWithoutBookId133712.length + " livres dans le tableau/l'array.")

console.log("* ".repeat(35));
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 6: 
console.log("Q6: Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");

let booksSorted = arrayWithoutBookId133712.sort((a, b) =>
  a.title < b.title ? -1 : 1
);

console.log(booksSorted);