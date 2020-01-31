import { User } from "./models/User";

const user = new User({ name: "Jordan Walke", age: 32 });
console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "Ryan Dahl" });
console.log(user.get("name"));
console.log(user.get("age"));

user.on("click", () => console.log("Clicked!"));
user.on("click", () => console.log("Double Clicked!"));

user.trigger("click");
user.trigger("change");

console.log(user);

console.log("Parcel Bundler");
