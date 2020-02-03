import { EventObject, Callback } from "./typesAndInterfaces";

export class Eventing {
  events: EventObject = { test: [() => {}] };

  on(eventName: string, cb: Callback): void {
    // with getter
    this.events.events[eventName]
      ? this.events.events[eventName].push(cb)
      : (this.events.events[eventName] = [cb]);

    // without getter
    /*
    this.events[eventName]
      ? this.events[eventName].push(cb)
      : (this.events[eventName] = [cb]);
    */
  }

  trigger(eventName: string): void {
    // with getter
    if (!this.events.events[eventName] || !this.events.events[eventName].length)
      return;
    this.events.events[eventName].forEach(cb => cb());

    // without getter
    /*
    if (!this.events[eventName] || !this.events[eventName].length) return;
    this.events[eventName].forEach(cb => cb());
    */
  }
}
