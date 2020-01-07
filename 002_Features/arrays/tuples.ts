// tuple - is a array-like data structure
// main difference of which is that they used multiple different data types
// to describe one particular object.

// usually tuple values are immutable but not in ts
// tuples consist on concept of order - and that is logically correct
// [] => [] => [] => [] => tuple in real life are consist on order

// player
const player = {
  class: "hunter",
  elf: true,
  level: 42,
  name: "Legolas"
};

// normal array, elements do not consist on order
const character = ["hunter", true, 42, "Legolas"];
[character[0], character[3]] = [character[3], character[0]];
// [ 'Legolas', 'elf', 42, 'hunter' ]

// in order to make it consist concept of order
// we need to define specific order of types with annotations
const fighter: [string, boolean, number, string] = [
  "hunter",
  true,
  42,
  "Legolas"
];

// this could be also achieved by writing type alias:
type Hero = [string, boolean, number, string];
const tuple: Hero = ["hunter", true, 42, "Legolas"];
