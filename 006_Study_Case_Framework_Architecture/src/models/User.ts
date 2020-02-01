import axios, { AxiosResponse } from "axios";

interface dataObject {
  name?: string;
  age?: number;
  photo?: string;
  id?: number;
}

interface eventObject {
  [key: string]: Callback[];
}

type Callback = () => void;

export class User {
  private data: dataObject;
  private events: eventObject = {};

  constructor(userObject: dataObject) {
    this.data = userObject;
  }

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(userObject: dataObject): void {
    this.data = Object.assign({}, this.data, userObject);
  }

  on(eventName: string, cb: Callback): void {
    this.events[eventName]
      ? this.events[eventName].push(cb)
      : (this.events[eventName] = [cb]);
  }

  trigger(eventName: string): void {
    if (!this.events[eventName] || !this.events[eventName].length) return;
    this.events[eventName].forEach(cb => cb());
  }

  async fetch(): Promise<AxiosResponse> {
    try {
      const res: AxiosResponse = await axios({
        method: "GET",
        url: `http://localhost:3000/users/${this.get("id")}`
      });
      console.log(res.data, "GET");
      this.set(res.data);
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }

  async save(): Promise<AxiosResponse> {
    try {
      const res: AxiosResponse = await axios({
        method: "GET",
        url: "http://localhost:3000/users"
      });
      const dataArr = res.data;
      if (dataArr.find((obj: dataObject) => obj.id === this.get("id"))) {
        const res: AxiosResponse = await axios({
          method: "PATCH",
          url: `http://localhost:3000/users/${this.get("id")}`,
          data: this.data
        });
        console.log(res.data, "PATCH");
        return res;
      } else {
        const res: AxiosResponse = await axios({
          method: "POST",
          url: `http://localhost:3000/users`,
          data: this.data
        });
        console.log(res.data, "POST");
        return res;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
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
