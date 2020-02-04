import { User } from "./models/User";

const user = new User({
  name: "Jordan Walke",
  age: 32,
  id: 0,
  photo: "https://bit.ly/2Og7zCQ"
});

console.log(user.get("name"));
console.log(user.get("age"));

user.on("change", () => console.log("Data Object has Changed!"));

user.set({ name: "Ryan Dahl", photo: "https://bit.ly/2uT35Lo" });
console.log(user.get("name"));
console.log(user.get("age"));

user.on("click", () => console.log("Clicked!"));
user.on("click", () => console.log("Double Clicked!"));
user.on("scroll", () => console.log("Scroll Captured!"));

console.log(user);

user.trigger("click");
user.trigger("scroll");
// user.trigger("change");

user.fetch();
user.on("save", () => console.log("Current Object was Saved!"));
user.save();

setTimeout(() => {
  console.log(user);
}, 2000);

console.log("Parcel Bundler");
