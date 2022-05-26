// On déclare l'array sur lequel on va travailler (qui est composé d'objets litteraux)
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 1: 
console.log("Q1: Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");

entrepreneurs.forEach( entrepreneur => {
  if(entrepreneur.year >= 1970) {
      console.log (`Nom : ${entrepreneur.first} ${entrepreneur.last}, Année de naissance : ${entrepreneur.year}`)
  }
});


// Autre technique (je pense qu'en réalité c'est plutot ça qui était demandé que la technique d'au-dessus)
let bornInThe70s = entrepreneurs.filter(
  (item) => item.year > 1970 && item.year < 1980
);
console.log(bornInThe70s);


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 2: 
console.log("Q2: Sors une array qui contient le prénom et le nom des entrepreneurs");

entrepreneurs.forEach( entrepreneur => {
  console.log (`Nom : ${entrepreneur.first} ${entrepreneur.last}`);
});


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 3: 
console.log("Q3: Quel âge aurait chaque inventeur aujourd'hui ?");

entrepreneurs.forEach( entrepreneur =>{
  console.log(`${entrepreneur.first} ${entrepreneur.last} : ${2022 - entrepreneur.year} ans`)
});


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// Question 4: 
console.log("Q4: Trie les entrepreneurs par ordre alphabétique du nom de famille");

let arrayNames = []

entrepreneurs.forEach( entrepreneur =>{
    arrayNames.push(`${entrepreneur.last} ${entrepreneur.first}`)
});

arrayNames.sort().forEach( name =>{// J'utilise la fonction sort() pour trier par ordre alphabétique
  console.log(name);  
})