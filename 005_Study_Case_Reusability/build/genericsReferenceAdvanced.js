"use strict";
// GENERICS WITH CLASSES
Object.defineProperty(exports, "__esModule", { value: true });
// array of nums
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
exports.ArrayOfNumbers = ArrayOfNumbers;
// array of strs
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
exports.ArrayOfStrings = ArrayOfStrings;
// array of anything
var ArrayOfElements = /** @class */ (function () {
    function ArrayOfElements(collection) {
        this.collection = collection;
    }
    ArrayOfElements.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfElements;
}());
exports.ArrayOfElements = ArrayOfElements;
var numbers = new ArrayOfElements([0, 0, 0, 0, 0, 0, 1, 1]);
var strings = new ArrayOfElements(["s", "t", "r", "i", "n", "g"]);
// -- generics can use type inference to predict collection type
var thatWorksToo = new ArrayOfElements([true, false]);
// GENERICS WITH FUNCTIONS
function printNumbers(data) {
    console.log(data);
    return;
}
exports.printNumbers = printNumbers;
function printStrings(data) {
    console.log(data);
    return;
}
exports.printStrings = printStrings;
function printElement(data) {
    console.log(data);
    return;
}
exports.printElement = printElement;
printNumbers(numbers.collection);
printStrings(strings.collection);
printElement(thatWorksToo.collection);
// -- generics can use type inference to predict collection type
printElement(thatWorksToo.collection);
// T must extend interface in order us to apply method
function useClassesMethods(collection) {
    for (var i = 0; i < collection.length; i++) {
        console.log(collection[i].get(i));
    }
}
exports.useClassesMethods = useClassesMethods;
useClassesMethods([strings, strings, strings]);
// -- generics can use type inference to predict collection type
useClassesMethods([numbers, numbers, numbers, numbers]);
