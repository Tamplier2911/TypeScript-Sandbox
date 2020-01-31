interface dataObject {
  name?: string;
  age?: number;
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
}
