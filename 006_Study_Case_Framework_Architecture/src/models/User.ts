import { Model } from "./Model";
import { DataObject } from "./typesAndInterfaces";

import { Eventing } from "./Eventing";
import { ApiFetch } from "./ApiFetch";
import { Attributes } from "./Attributes";

export class User extends Model<DataObject> {
  static buildUser(attrs: DataObject) {
    return new User(
      new Attributes<DataObject>(attrs),
      new ApiFetch<DataObject>("http://localhost:3000/users"),
      new Eventing()
    );
  }
}
