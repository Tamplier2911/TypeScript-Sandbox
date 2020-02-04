import { EventObject, Callback } from "./typesAndInterfaces";

export class Eventing {
  events: EventObject = { test: [() => {}] };

  // with getter arrow - with lexical this
  on = (eventName: string, cb: Callback): void => {
    this.events[eventName]
      ? this.events[eventName].push(cb)
      : (this.events[eventName] = [cb]);
  };

  // with getter arrow - with lexical this
  trigger = (eventName: string): void => {
    if (!this.events[eventName] || !this.events[eventName].length) return;
    this.events[eventName].forEach(cb => cb());
  };
}
