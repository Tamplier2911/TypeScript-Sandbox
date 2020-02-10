import { User } from "../models/User";
import { DataObject } from "../models/typesAndInterfaces";
import { View } from "./View";

export class UserForm extends View<User, DataObject> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#btn-name": this.onChangeNameClick,
      "click:#btn-age": this.onRandomizeAgeClick,
      "click:#btn-save": this.onSaveClick
    };
  }

  onChangeNameClick = (): void => {
    console.log("ChangeName clicked!");
    const input = this.parent.querySelector("#input-name") as HTMLInputElement;
    const name = input.value;
    this.model.set({ name: name });
    console.log(name);
    console.log(this.model);
  };

  // USE ARROW FUNCTION FOR LEXICAL THIS, TO REFER TO ORIGINAL CONTEXT
  onRandomizeAgeClick = (): void => {
    console.log("RandomizeAge clicked!");
    this.model.setRandomAge();
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    // <h1 class="userForm__header">User Form</h1>
    // <div>${this.model.get("name")}, ${this.model.get("age")}</div>
    return `
            <div class="userForm__container">
                ${/* extracted */ ""}
                <input type="text" class="userForm__input" placeholder="${this.model.get(
                  "name"
                )}" id="input-name" />
                <button type="button" class="userForm__button" id="btn-name">Change Name</button>
                <button type="button" class="userForm__button" id="btn-age">Randomize Age</button>
                <button type="button" class="userForm__button" id="btn-save">Save Data</button>
            </div>
        `;
  }
}
