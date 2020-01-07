// Classes - is a blueprint to create an object with some properties - values and methods,
// to represent a real life objects.

// Difference between ES6 Classes and TypeScript Classes

// Modifiers  - is a keywords that we can place on different methods and properties inside of a class.
// public 	  - this method can be called any where, any time. (default value)
// private 	  - this method can only be called by others methods in class.
// protected 	- this method can be called by others methods in this class, or by other methods in child classes.

// fields in TS classes are created just like static field on react components
// if we want to have some initial value, we can just defined it stright after name and type using equal sign

// if we want to set some properties - same as usually constructor is required
// also we have to pre-define properties before constructor, and asign values to them in constructor

class Device {
  product: string;
  price: number;

  constructor(product: string, price: number) {
    this.product = product;
    this.price = price;
  }

  testfield: string = "testfield";
  testfields = "string";

  private deviceOverview(): string {
    return `${this.product} consts ${this.price}$`;
  }

  public deviceOverviewFromOwner(): string {
    return this.deviceOverview();
  }

  protected priceWithDiscount(percent: number): string {
    return `Price with discount of ${percent}% is ${(this.price / 100) *
      percent}`;
  }

  public priceWithDiscountFromOwner(percent: number): string {
    return this.priceWithDiscount(percent);
  }
}

// in order to make process of properties initialization
// a little bit stright forward we can add public modifier to it.

// ff we use private modifier on some field, we will not be able to read it
// outside of our class anymore, and protected will be also readeble only by
// methods only in class and it child instnaces.

class Phone extends Device {
  constructor(
    product: string,
    price: number,
    public name: string,
    public createdAt: Date
  ) {
    super(product, price);
  }

  public greetFromChild(): string {
    console.log(this);
    return "Hello, from child class.";
  }
}

const iphone = new Phone("Phone", 449, "Galaxy X3", new Date());
console.log(iphone.deviceOverviewFromOwner());
console.log(iphone.priceWithDiscountFromOwner(30));
console.log(iphone.greetFromChild());
