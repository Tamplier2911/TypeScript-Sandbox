import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { DataObject } from "./models/typesAndInterfaces";

// Single User
/*
const user = User.buildUser({
  name: "Jordan Walke",
  age: 32,
  id: 0,
  photo: "https://bit.ly/2Og7zCQ"
});

const main = document.querySelector(".main");
const userEdit = new UserEdit(main, user);
userEdit.render();
console.log(userEdit, "OBJ");
*/

// Collection of Users

const users = new Collection(
  "http://localhost:3000/users",
  (json: DataObject) => {
    return User.buildUser(json);
  }
);

const main = document.querySelector(".main");
console.log("whats happening", users);
users.on("change", () => {
  console.log(main);
  if (main) {
    new UserList(main, users).render();
  }
});

users.fetch();

/*
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

setTimeout(() => {
  user.save();
}, 2000);

setTimeout(() => {
  console.log(user);
}, 2000);

const collection = User.buildUserCollection();
collection.fetch();

setTimeout(() => {
  console.log(collection);
}, 3000);

*/
