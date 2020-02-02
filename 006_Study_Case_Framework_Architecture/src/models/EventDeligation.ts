import { EventObject, Callback } from "./typesAndInterfaces";

export class EventDeligation {
  events: EventObject = {};

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
