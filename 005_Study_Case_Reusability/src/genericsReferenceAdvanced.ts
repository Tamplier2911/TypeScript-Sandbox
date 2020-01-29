// GENERICS WITH CLASSES

// array of nums
export class ArrayOfNumbers {
  collection: number[];
  constructor(collection: number[]) {
    this.collection = collection;
  }
  get(index: number): number {
    return this.collection[index];
  }
}

// array of strs
export class ArrayOfStrings {
  collection: string[];
  constructor(collection: string[]) {
    this.collection = collection;
  }
  get(index: number): string {
    return this.collection[index];
  }
}

// array of anything
export class ArrayOfElements<T> {
  collection: T[];
  constructor(collection: T[]) {
    this.collection = collection;
  }
  get(index: number): T {
    return this.collection[index];
  }
}

const numbers = new ArrayOfElements<number>([0, 0, 0, 0, 0, 0, 1, 1]);
const strings = new ArrayOfElements<string>(["s", "t", "r", "i", "n", "g"]);

// -- generics can use type inference to predict collection type
const thatWorksToo = new ArrayOfElements([true, false]);

// GENERICS WITH FUNCTIONS

export function printNumbers(data: number[]): void {
  console.log(data);
  return;
}

export function printStrings(data: string[]): void {
  console.log(data);
  return;
}

export function printElement<T>(data: T): void {
  console.log(data);
  return;
}

printNumbers(numbers.collection);
printStrings(strings.collection);
printElement<boolean[]>(thatWorksToo.collection);

// -- generics can use type inference to predict collection type
printElement(thatWorksToo.collection);

// GENERIC CONSTRAINTS

// define interface that T suppose comfort to
interface Printable {
  get(data: number): void;
}

// T must extend interface in order us to apply method
export function useClassesMethods<T extends Printable>(collection: T[]): void {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i].get(i));
  }
}

useClassesMethods<ArrayOfElements<string>>([strings, strings, strings]);

// -- generics can use type inference to predict collection type
useClassesMethods([numbers, numbers, numbers, numbers]);
