import { Model } from "./Model";
import { DataObject } from "./typesAndInterfaces";

import { Eventing } from "./Eventing";
import { ApiFetch } from "./ApiFetch";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";

export class User extends Model<DataObject> {
  static buildUser(attrs: DataObject) {
    return new User(
      new Attributes<DataObject>(attrs),
      new ApiFetch<DataObject>("http://localhost:3000/users"),
      new Eventing()
    );
  }

  static buildUserCollection(): Collection<User, DataObject> {
    return new Collection<User, DataObject>(
      "http://localhost:3000/users",
      (json: DataObject) => User.buildUser(json)
    );
  }
}
