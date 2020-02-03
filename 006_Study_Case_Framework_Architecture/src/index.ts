import { User } from "./models/User";

const user = new User({
  name: "Jordan Walke",
  age: 32,
  id: 1,
  photo: "https://bit.ly/2Og7zCQ"
});

console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "Ryan Dahl", photo: "https://bit.ly/2uT35Lo" });
console.log(user.get("name"));
console.log(user.get("age"));

user.on("click", () => console.log("Clicked!"));
user.on("click", () => console.log("Double Clicked!"));
user.on("scroll", () => console.log("Scroll captured!"));

console.log(user);

user.trigger("click");
user.trigger("scroll");
user.trigger("change");

/*
console.log(user);

// user.save();
// user.fetch();

setTimeout(() => {
  console.log(user);
}, 2000);

console.log("Parcel Bundler");

*/
