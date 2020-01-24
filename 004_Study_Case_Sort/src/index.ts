// import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
// import { mergeSort } from "./mergeSort";

const numbersArray = [1, 3, 5, 7, 8, 0, 2, 4, 6, 9];
// const numbersString = "1357802469";
// const lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const lettersString = "qwertyuiopasdfghjklzxcvbnm";

// create numbers collection using NumbersCollection class that extends Sorter
const numbersCollection = new NumbersCollection(numbersArray);
console.log(numbersCollection.data);
// sort numbers collection using inherited method from abstract class Sorter
numbersCollection.bubbleSort();
console.log(numbersCollection.data);

// create cahracters collection using CharactersCollection class that extends Sorter
const charactersCollection = new CharactersCollection(lettersString);
console.log(charactersCollection.data);
// sort cahracters collection using inherited method from abstract class Sorter
charactersCollection.bubbleSort();
console.log(charactersCollection.data);

// create linked list using LinkedList class that extends Sorter
const linkedList = new LinkedList();
// fill linked list with random values
for (let i = 0; i < 10; i++) {
  linkedList.push(Math.floor(Math.random() * 10));
}
console.log(linkedList);
// sort linked list using inherited method from abstract class Sorter
linkedList.bubbleSort();
console.log(linkedList);
/*

// create numbers collection
const numCollection = new NumbersCollection(numbersArray);
console.log(numCollection.length);

// create instance of sorter with number collection
// num collection must comfort sortable interface
// perform sorting
const numSorter = new Sorter(numCollection);
// console.log(numSorter.collection);
console.log(numSorter.bubbleSort());
console.log(numCollection.data);

// create characters collection
const charCollection = new CharactersCollection(lettersString);
console.log(charCollection.length);

// create instance of sorter with char collection
// char collection must comfort sortable interface
// perform sorting
const charSorter = new Sorter(charCollection);
// console.log(charSorter.collection);
console.log(charSorter.bubbleSort());
console.log(charCollection.data);

// create linked list
const linkedList = new LinkedList();

// fill linked list with random values
for (let i = 0; i < 10; i++) {
  linkedList.push(Math.floor(Math.random() * 10));
}

// console.log(linkedList);

// create instance of sorter with linked list
// linked list must comfort sortable interface
// perform sorting
let linkedListSorter = new Sorter(linkedList);
console.log(linkedListSorter.bubbleSort());

// check sorted linked list
// its working :D
linkedList.print();

// console.log(linkedList.reverse());
// console.log(linkedList.reverse());
// linkedList.print();

*/
