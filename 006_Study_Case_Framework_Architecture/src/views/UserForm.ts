export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick
    };
  }

  onButtonClick(): void {
    console.log("Button clicked!");
  }

  template(): string {
    return `
            <div class="userForm__container">
                <h1 class="userForm__header">User Form</h1>
                <input type="text" class="userForm__input"/>
                <button type="button" class="userForm__button">Submit</button>
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
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.appendChild(templateElement.content);
    // this.parent.append(templateElement.content);
  }
}
