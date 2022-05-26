const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

//Check if all books were rented at least once
let atLeastOnce = books.every((item) => item.rented > 1);
console.log(atLeastOnce);

//Most rented book
let mostRented = books.reduce(function (a, b) {
  return a.rented > b.rented ? a : b;
});
console.log(mostRented);

//Least rented book
let leastRented = books.reduce(function (a, b) {
  return a.rented < b.rented ? a : b;
});
console.log(leastRented);

//Book with ID of 873495
let bookWithSpecificId = books.filter(function (item) {
  return item.id === 873495;
});
console.log(bookWithSpecificId);

//Delete book with ID of 133712
let arrayWithOneBookDeleted = books.filter(function (item) {
  return item.id != 133712;
});
console.log(arrayWithOneBookDeleted);

//Sort books by alphabetical order(133712 not included)
let booksSorted = arrayWithOneBookDeleted.sort((a, b) =>
  a.title < b.title ? -1 : 1
);
console.log(booksSorted);