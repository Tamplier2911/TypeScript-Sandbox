import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    Object.keys(eventsMap).forEach(key => {
      // [click, button]
      const [eventName, selector] = key.split(":");
      fragment.querySelectorAll(selector).forEach(el => {
        el.addEventListener(eventName, eventsMap[key]);
      });
    });
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    Object.keys(regionsMap).forEach(key => {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    });
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    // view nesting
    this.onRender();

    this.parent.append(templateElement.content);
  }
}
