@classDecorator
class Animal {
  @testDecorator
  color = "brown";

  @testDecorator
  get formattedColor(): string {
    return `Our animal color is ${this.color}`;
  }

  @logError("Woah, run escape, the error is here!")
  attack(@parameterDecorator soundValue: string): void {
    // throw new Error();
    if (soundValue === "whisper") {
      console.log("Purr!");
    } else if (soundValue === "loud") {
      console.log("Rawr!");
    }
  }
}

// Target - prototype of the class we targeting.

// Key - which method or property we want to decorate.

// Property Descriptor - is an object, that has some
// configuration options around a property defined on an object
// e.g. - value, writable, enumerable, configurable.

function logError(err: string) {
  return function(
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ): void {
    const method = descriptor.value;
    descriptor.value = function() {
      try {
        method();
      } catch (error) {
        console.log(err);
        console.table({ prototype: target });
        console.table({ value: key });
        console.table({ propertyDescriptor: descriptor });
      }
    };
  };
}

function testDecorator(target: any, key: string) {
  console.log("Property Decorator");
  console.log(target, key);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log("Param Decorator");
  console.log(target, key, index);
}

function classDecorator(constructor: any) {
  console.log("Class Decorator");
  console.log(constructor);
}

// Explanation of Property Descriptors

const obj = { name: "Rob", age: 32, role: "user" };

Object.getOwnPropertyDescriptor(obj, "name");
// {value: "Rob", writable: true, enumerable: true, configurable: true}

Object.defineProperty(obj, "name", { writable: false });
// {value: "Rob", writable: false, enumerable: true, configurable: true}

// cannot be overwritten
// obj.name = "Don";
// obj.name;
// "Rob"

const bear = new Animal();
bear.attack("loud");
