console.log("Working.");
console.log("More work.");
console.log("Testing my TS Environment Setup");

// const sort = (collection: (number | string)[]): (number | string)[] => {};

const numbersArray = [1, 3, 5, 7, 8, 0, 2, 4, 6, 9];
const numbersString = "1357802469";
const lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const lettersString = "qwertyuiopasdfghjklzxcvbnm";

const mergeSort = (
  arr: (number | string)[] | string
): (number | string)[] | string => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (
  arr1: (number | string)[] | string,
  arr2: (number | string)[] | string
): (number | string)[] | string => {
  let i = 0;
  let j = 0;
  let result: (number | string)[] = [];

  if (!Array.isArray(arr1)) arr1 = arr1.split("");
  if (!Array.isArray(arr2)) arr2 = arr2.split("");

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

console.log(mergeSort(numbersArray));
console.log(mergeSort(numbersString));
console.log(mergeSort(lettersArray));
console.log(mergeSort(lettersString));
console.log(merge("13578", "02469"));

class Sorted {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  bubbleSort() {
    for (let i = this.collection.length - 1; i > 0; i--) {
      let swap = false;
      for (let j = 0; j < i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          [this.collection[j], this.collection[j + 1]] = [
            this.collection[j + 1],
            this.collection[j]
          ];
          swap = true;
        }
        if (!swap) break;
      }
    }
    return this.collection;
  }
}

const test = new Sorted([5, 2, 1, 3, 4]);

console.log(test.collection);
console.log(test.bubbleSort());
