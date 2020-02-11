import { CollectionView } from "./CollectionView";
import { User } from "../models/User";
import { DataObject } from "../models/typesAndInterfaces";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, DataObject> {
  renderItem(model: User, itemParent: Element) {
    new UserShow(itemParent, model).render();
  }
}
