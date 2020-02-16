import "reflect-metadata";

// METADATA IMPLEMENTATION ON PLAINT OBJECTS

const user = {
  name: "Bonny",
  age: 32
};

// associate metadata with an object
Reflect.defineMetadata("note", "loves beer", user);

// associate metadata to specific property
Reflect.defineMetadata("desc", "greate age", user, "age");

// retrieve metadata value from an object
const secrets = Reflect.getMetadata("note", user);

// retreive metadata value from property of an object
const truth = Reflect.getMetadata("desc", user, "age");

console.log(user, secrets, truth);

// METADATA IMPLEMENTATION ON JS CLASSES

@printMetadata
class Human {
  constructor(
    public height: number,
    public weight: number,
    public age: number
  ) {
    this.height = height;
    this.weight = weight;
    this.age = age;
  }

  @markFunction("never will be happy")
  getHumanInfo(): void {
    console.log(
      `Height: ${this.height}cm | Weight: ${this.weight}kg | Age: ${this.age}yrs`
    );
  }
}

function markFunction(secret: string) {
  return function(target: Human, key: string) {
    Reflect.defineMetadata("secret", secret, target, key);
  };
}

// reference to constructor of Human class
function printMetadata(target: typeof Human) {
  // for each method in prototype of target
  for (let key in target.prototype) {
    // for each method name get metadata from field 'secret', proto, method name
    // eg  'secret', {getHumanInfo:...}, 'getHumanInfo'
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret, "from class decorator");

    // router.get(path, target.prototype[key])
  }
}

// const secret = Reflect.getMetadata("secret", Human.prototype, "getHumanInfo");
// console.log(secret);

// const bobby = new Human(182, 74, 27);
// bobby.getHumanInfo();
