type Callback = () => void;

interface eventObject {
  [key: string]: Callback[];
}

export class EventDeligation {
  events: eventObject;

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
