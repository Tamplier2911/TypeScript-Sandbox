// Interfaces and Classes - let us get really strong code re-use in TypeScript.
// Interface - creates a new custom type, describing the propert
// names and value types of an object.

const keyboardHyperX = {
  label: "HyperX",
  color: "Black",
  led: "Red",
  made: new Date("December 17, 2018 09:24:00"),
  mechanical: true,
  summary() {
    return `${this.label} keyboard, color ${this.color}, made in ${this.made}.`;
  }
};

// if we wanted to represent this object inside of a function
// it would look something like that, a lot of work aint it?
const displayKeyboard = (keyboard: {
  label: string;
  color: string;
  led: string;
  made: Date;
  mechanical: boolean;
  summary(): string;
}): object => {
  return keyboard;
};

// thats where interfaces come at hand
interface Keyboard {
  label: string;
  color: string;
  led: string;
  made: Date;
  mechanical: boolean;
  summary(): string;
}

// now you may see why interfaces are so good for code reuse
// we defined it just once but now can use it in a functions
// saving a lot of time and space

const displayKeyboardWithInterface = (keyboard: Keyboard): object => {
  return keyboard;
};

console.log(displayKeyboard(keyboardHyperX));
console.log(displayKeyboardWithInterface(keyboardHyperX));
console.log(keyboardHyperX.summary());

// for example we have interface:
interface User {
  name: string;
}

// at the other had we have object:
const persone = {
  name: "Dorothy",
  active: true
};

// if we now write a function, that takes an object type of User interface,
// persone object will still match this check - because it does have name,
// and that is the only option getting checked.
const logName = (obj: User): void => console.log(obj.name);
console.log(logName(persone));

// even tho persone object is not the same as User interface type
// for this case we probably should not call interface User - but instead HasName for example
interface HasName {
  name: string;
}
const nameLogger = (obj: HasName): void => console.log(obj.name);
console.log(nameLogger(persone));

// now our interface is doing exactly how it named - checking of object has a name
const drink = {
  name: "Pinacolada"
};
console.log(nameLogger(drink));

// interfaces are mean to describe a shape of the different properties of very distinct objects

// general strategy of code reuse - is create a functions that accepts arguments
// that are typed with interfaces. objects / classes can decide to 'implement'
// a given interface to work with a function.

// Object / Class ==> follow interface ==> that function require.
