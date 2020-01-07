// type inferenced as array of string
const fruits = ["apple", "banana", "pear"];

// type inferenced as any
// in this situation type annotation are required
const cars: (string | { inStock: boolean })[] = [];

// array of date objects: Date[]
const dates = [new Date(), new Date(), new Date()];

// two demension array: (string | number)[][]
const fruitsTotal = [
  ["banana", 5],
  ["apple", 10]
];

// help with inference when extracting values
// fruit ifrerenced as string
let fruit = fruits[0];

// prevent us from adding incompatible values to the array
// error - 20 is not a string
// fruits.push(20);

// can get help with 'map', 'forEach', 'reduce' functions
// fruit iferenced as type of string
fruits.map(fruit => [fruit, " is tasty"]);

// can still contain multiple different types
cars.push("bmw");
cars.push("mercedes");
cars.push("opel");
cars.map(car => [car, { inStock: true }]);
