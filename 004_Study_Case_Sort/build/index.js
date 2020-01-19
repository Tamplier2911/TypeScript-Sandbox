"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// import { mergeSort } from "./mergeSort";
var numbersArray = [1, 3, 5, 7, 8, 0, 2, 4, 6, 9];
var numbersString = "1357802469";
var lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var lettersString = "qwertyuiopasdfghjklzxcvbnm";
// console.log(mergeSort(numbersArray));
// console.log(mergeSort(numbersString));
// console.log(mergeSort(lettersArray));
// console.log(mergeSort(lettersString));
var numCollection = new NumbersCollection_1.NumbersCollection(numbersArray);
console.log(numCollection.length);
var charCollection = new CharactersCollection_1.CharactersCollection(lettersString);
console.log(charCollection.length);
var numSorter = new Sorter_1.Sorter(numCollection);
// console.log(numSorter.collection);
console.log(numSorter.bubbleSort());
console.log(numCollection.data);
var charSorter = new Sorter_1.Sorter(charCollection);
// console.log(charSorter.collection);
console.log(charSorter.bubbleSort());
console.log(charCollection.data);
