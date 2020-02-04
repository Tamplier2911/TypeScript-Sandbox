import { Attributes, Fetch, Events, HasId } from "./typesAndInterfaces";
import { AxiosResponse } from "axios";

export class Model<T extends HasId> {
  private attributes: Attributes<T>;
  private sync: Fetch<T>;
  private events: Events;
  constructor(attributes: Attributes<T>, sync: Fetch<T>, events: Events) {
    this.attributes = attributes;
    this.sync = sync;
    this.events = events;
  }

  get get() {
    return this.attributes.get;
  }

  set(dataObject: T): void {
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
}
