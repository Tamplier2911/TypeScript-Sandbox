"use strict";
console.log("Working.");
console.log("More work.");
console.log("Testing my TS Environment Setup");
// const sort = (collection: (number | string)[]): (number | string)[] => {};
var numbersArray = [1, 3, 5, 7, 8, 0, 2, 4, 6, 9];
var numbersString = "1357802469";
var lettersArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var lettersString = "qwertyuiopasdfghjklzxcvbnm";
var mergeSort = function (arr) {
    if (arr.length <= 1)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
};
var merge = function (arr1, arr2) {
    var i = 0;
    var j = 0;
    var result = [];
    if (!Array.isArray(arr1))
        arr1 = arr1.split("");
    if (!Array.isArray(arr2))
        arr2 = arr2.split("");
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
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
var Sorted = /** @class */ (function () {
    function Sorted(collection) {
        this.collection = collection;
    }
    Sorted.prototype.bubbleSort = function () {
        var _a;
        for (var i = this.collection.length - 1; i > 0; i--) {
            var swap = false;
            for (var j = 0; j < i; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    _a = [
                        this.collection[j + 1],
                        this.collection[j]
                    ], this.collection[j] = _a[0], this.collection[j + 1] = _a[1];
                    swap = true;
                }
                if (!swap)
                    break;
            }
        }
        return this.collection;
    };
    return Sorted;
}());
var test = new Sorted([5, 2, 1, 3, 4]);
console.log(test.collection);
console.log(test.bubbleSort());
