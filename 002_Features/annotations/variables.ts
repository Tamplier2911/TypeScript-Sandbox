// Type Annotations and Inference - Variables

// colon and word after = type annotation
// we only going to assign a number type of value to this variable
let apples: number = 5;

// Primitives
// type annotations can be used for any kind of value
let num: number = 1;
let str: string = "b";
let bool: boolean = true;
let notyet: undefined = undefined;
let nothing: null = null;
// let sym: symbol = Symbol("sym");

// built in objects
let now: Date = new Date();

// Arrays
// array that going to contain strings
let colors: string[] = ["red", "orange", "orangered"];
let numbers: number[] = [1, 2, 3, 4, 5];
let decisions: boolean[] = [true, false];
let emptyness: undefined[] = [undefined, undefined];
let voidness: null[] = [null, null];
// let symbolic: symbol[] = [Symbol("s"), Symbol("y")];

let colorsArr: (string | number)[];
colorsArr = ["red", 22, "orangered"];

// Classes
// variable that going to be instance of Persone
class Person {}
let george: Person = new Person();

// Object literals
// variable that going to be an object, that has x and y values of number type
let pont: { x: number; y: number | string } = {
  x: 10,
  y: "string"
};

// variable as a function
// what type of arguments we expect to get
// (a: number, b: number)

// annotate what value we expect to be returned
// => number

// annotate type for each of the argument passed in
// (a: number, b: number)

// variable annotation for function are literally - (a: number, b: number) => number

const sumTwo: (a: number, b: number) => number = (a, b) => {
  return b ? sumTwo(a ^ b, (a & b) << 1) : a;
};

console.log(sumTwo(2, 2));

// Type Inference
// If we declar and initialize variable on the same line - TS will figure out type

// fruit type is inferenced as a string
let fuit = "banana";

// house type is inferenced as any
let house;

// When to use Type Annotations

// 1) Variable initialization happens later
let writters = ["Orwell", "Hacksley", "Bradbury"];
let writter: string;

for (let i = 0; i < writters.length; i++) {
  if (writters[i] === "Orwell") writter = writters[i];
}

// 2) When we want variable to have type that cannot be infered.
let nums = [5, 4, 3, 2, 1, 0, -1, -2];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    numbersAboveZero = nums[i];
  } else {
    numbersAboveZero = false;
  }
}

// 3) Functions that returns the 'any' type.
const json = '{"x": 10, "y": 20}';
const cords: { x: number; y: number } = JSON.parse(json);

// Type Annotations + Type Inference with Functions & Objects
