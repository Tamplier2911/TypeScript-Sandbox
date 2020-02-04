// import axios, { AxiosResponse } from "axios";
import { DataObject } from "./typesAndInterfaces";
import { Eventing } from "./Eventing";
import { Fetch } from "./Fetch";
import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";

import { Model } from "./Model";

// type Callback = () => void;

export class User extends Model<DataObject> {
  // private data: DataObject;
  /*
  public attributes: Attributes<DataObject> = new Attributes<DataObject>({});
  public events = new Eventing();
  public sync = new Fetch<DataObject>("http://localhost:3000/users");

  constructor(userObject: DataObject) {
    this.attributes.set(userObject);
  }

  get get() {
    return this.attributes.get;
  }

  set(dataObject: DataObject): void {
    this.attributes.set(dataObject);
    this.events.trigger("change");
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") return;
    this.sync
      .fetch(id)
      .then((res: AxiosResponse): void => this.set(res.data))
      .catch(err => console.log(err.message));
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => this.events.trigger("save"))
      .catch(err => console.log(err.message));
  }
  */
}

// Composition Options

/*

// #1 Extended class properties with another class

export class User {
  constructor(private data: dataObject, private events: EventDeligation) {}
}
const user = new User({ id: 1, name: "Tom" }, new EventDeligation());

// #2 Static method with preconfiguration and prop assignment

export class User {
  constructor(private events: EventDeligation) {}

  static initializeData(data: userObject) {
    const user = new User(new EventDeligation());
    user.set(data);
  }
}

User.initializeData({ id: 1, name: "Tom" })

// #3 Accept properties into constructor with hardcoded dependencies as class props

export class User {
  events: EventDeligation = new EventDeligation();

  constructor(private data: userObject) {}

  static initializeData(data: userObject) {
    const user = new User(new EventDeligation());
    user.set(data);
  }
}

const user = new User();
user.events // are here

*/
