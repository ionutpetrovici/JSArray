// 1. Tipăriți toate numerele pare de la 0 la 10

// Încercați să rezolvați această problemă cât mai eficient posibil. Luați în considerare utilizarea buclelor care vă vor permite să tastați cele mai puține caractere / comenzi (se acceptă orice abordare bazată pe bucle). Deși ați putea pur și simplu să tipăriți numerele pare, fiți creativi și încercați să le generați într-un mod în care să funcționeze indiferent de limita setată (până la 10 sau chiar până la 10.000).

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// // 2. Calculați suma numerelor dintr-un șir de numere

// // Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite.

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// // SAU

// function sumArrayImperative(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// let numbers = [5, 33, -65, 95, 23, -8];
// console.log(sumArrayImperative(numbers));


// // 3. Creați o funcție care inversează un șir de numere

// // Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite. Un șir de numere va fi trimis ca date de intrare și, ca rezultat, funcția va returna un șir nou de numere cu elementele primului în ordine inversă.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // SAU

// function reverseString(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// let numbers = [" 5", " 33", " -65", " 95", " 23", " -8"];
// let result = reverseString(numbers);
// console.log(result);

// // 4. Returnează numărul de vocale dintr-un șir de caractere (string)

// // Creați o funcție care va returna un număr întreg al numărului de vocale găsite într-un șir. Aceasta este o modalitate excelentă de a practica determinarea caracteristicilor unui set de date.

// const vowels = ["a", "e", "i", "o", "u"]

// function countVowel(str) {
//   let count = 0;

//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count
// }

// const string = prompt('Introdu un string: ');

// const result = countVowel(string);

// console.log(result);



// 5. EXERCITIU EXTRA

// let nume = "petrovici";
// let prenume = "ionut";

// let person = {
//   nume: "petrovici",
//   prenume: "ionut",
//   //fullname: "" // "Petrovici Ionut"
// }

// let fullname = ""; // "Petrovici Ionut"

// nume = nume.split("");

// let FirstLetter = nume[0];

// nume[0] = FirstLetter.toUpperCase();
// console.log(nume);

// let Nume = "";

// for (let i = 0; i < nume.length; i++) {
//   Nume = Nume + nume[i];
// }
// console.log(Nume);



// prenume = prenume.split("");

// let firstLetter = prenume[0];

// prenume[0] = firstLetter.toUpperCase();
// console.log(nume);

// let Prenume = "";

// for (let i = 0; i < prenume.length; i++) {
//   Prenume = Prenume + prenume[i];
// }
// console.log(Prenume);


// let fullName = "Petrovici Ionut";

// for (let i = 0; i < nume.lenght; i++) {
//   fullName = Nume[i] + Prenume[i];
// }
// console.log(fullName);