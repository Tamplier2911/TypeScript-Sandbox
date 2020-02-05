import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { DataObject } from "./typesAndInterfaces";

export class Collection<T, K> {
  //   models: DataObject[] = [];
  models: T[] = [];
  events: Eventing = new Eventing();
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios({
      method: "GET",
      url: `${this.rootUrl}`
    })
      .then((res: AxiosResponse) =>
        res.data.forEach((obj: K) => {
          const dataObject = this.deserialize(obj);
          this.models.push(dataObject);
        })
      )
      .catch(err => console.log(err.message));
  }
}
