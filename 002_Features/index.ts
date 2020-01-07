// ts-node index.ts

// TS knows all methods that Date object may have.
const today = new Date();
console.log(today);

// If we hover on persone, we see that TS defaulted:
// name to be a string type and age to be number type.
const persone = {
  name: "Brenda",
  age: 21
};

// VolksVagen on hover will point us to Car object,
// which has all props and methods of Car class.
class Car {}
const volksVagen = new Car();
