import { View } from "./View";
import { User } from "../models/User";
import { DataObject } from "../models/typesAndInterfaces";

export class UserShow extends View<User, DataObject> {
  eventsMap(): { [key: string]: () => void } {
    return {
      // add events here e.g.:
      //   "click:#btn-save": this.onSaveClick
    };
  }

  onSaveClick = (): void => {
    // define events here e.g:
    // this.model.save();
  };

  template(): string {
    return `
            <div class="userInfo__container">
                <h1 class="userInfo__header">User Data:</h1>
                <div class="userInfo__data">${this.model.get(
                  "name"
                )}, ${this.model.get("age")}</div>
                <div class="userInfo__photoContainer">
                    <img class="userInfo__photo" src=${this.model.get(
                      "photo"
                    )}></div>
                </div>
            </div>
        `;
  }
}
