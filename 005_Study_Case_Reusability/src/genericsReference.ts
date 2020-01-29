// GENERICS IN A NUTSHELL

class HoldValue<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
  addTwo(a: number, b: number): number {
    return b ? this.addTwo(a ^ b, (a & b) << 1) : a;
  }
}

const numberHolder = new HoldValue<number>(123);
console.log(numberHolder.data);

const stringHolder = new HoldValue<string>("string");
console.log(stringHolder.data);

const arrayHolder = new HoldValue<number[]>([1, 2, 3]);
console.log(arrayHolder.data);

const objectHolder = new HoldValue<object>({ a: 2, b: "gen" });
console.log(objectHolder.data);

interface User {
  name: string;
  email: string;
  phone: number;
}

const userHolder = new HoldValue<User>({
  name: "Thomas",
  email: "tom@home.com",
  phone: 1422318
});
console.log(userHolder.data);
