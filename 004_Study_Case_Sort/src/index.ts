import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
// import { mergeSort } from "./mergeSort";

const numbersArray = [1, 3, 5, 7, 8, 0, 2, 4, 6, 9];
const numbersString = "1357802469";
const lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const lettersString = "qwertyuiopasdfghjklzxcvbnm";

// console.log(mergeSort(numbersArray));
// console.log(mergeSort(numbersString));
// console.log(mergeSort(lettersArray));
// console.log(mergeSort(lettersString));

const numCollection = new NumbersCollection(numbersArray);
console.log(numCollection.length);

const charCollection = new CharactersCollection(lettersString);
console.log(charCollection.length);

const numSorter = new Sorter(numCollection);
// console.log(numSorter.collection);
console.log(numSorter.bubbleSort());
console.log(numCollection.data);

const charSorter = new Sorter(charCollection);
// console.log(charSorter.collection);
console.log(charSorter.bubbleSort());
console.log(charCollection.data);
