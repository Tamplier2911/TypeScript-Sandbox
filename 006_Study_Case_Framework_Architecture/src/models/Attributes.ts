import { DataObject } from "./typesAndInterfaces";

export class Attributes<T> {
  public data: T;
  public attributes;

  constructor(dataObject: T) {
    this.data = dataObject;
  }

  get<K extends keyof T>(key: K): T[K] {
    // with getter
    // console.log(this.attributes.data, "here");
    return this.attributes.data[key];

    // without getter
    // return this.data[key];
  }

  set(dataObject: T): void {
    this.data = Object.assign({}, this.data, dataObject);
  }
}
