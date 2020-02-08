import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#btn-name": this.onChangeNameClick,
      "click:#btn-age": this.onRandomizeAgeClick
    };
  }

  onChangeNameClick = (): void => {
    console.log("ChangeName clicked!");
    const input = this.parent.querySelector("#input-name") as HTMLInputElement;
    const name = input.value;
    this.model.set({ name: name });
  };

  // USE ARROW FUNCTION FOR LEXICAL THIS, TO REFER TO ORIGINAL CONTEXT
  onRandomizeAgeClick = (): void => {
    console.log("RandomizeAge clicked!");
    this.model.setRandomAge();
  };

  template(): string {
    return `
            <div class="userForm__container">
                <h1 class="userForm__header">User Form</h1>
                <div>${this.model.get("name")}, ${this.model.get("age")}</div>
                <input type="text" class="userForm__input" placeholder="${this.model.get(
                  "name"
                )}" id="input-name" />
                <button type="button" class="userForm__button" id="btn-name">Change Name</button>
                <button type="button" class="userForm__button" id="btn-age">Randomize Age</button>
            </div>
        `;
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

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    // this.parent.appendChild(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
