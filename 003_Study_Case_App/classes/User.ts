import faker from "faker";
import { DisplayMap } from "./Map";

export class User implements DisplayMap {
  name: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.email = faker.internet.email();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    };
  }

  public intro(): void {
    console.log(
      `My name is ${this.name}, and my email address is ${this.email}`
    );
  }
  public coords(): void {
    console.log(
      `My coords are lat: ${this.location.lat} lng: ${this.location.lng}`
    );
  }

  public infoWindowContent(): string {
    return `<h4>Name: ${this.name}</h4>
            <div>Email: ${this.email}</div>
            <div>Position: ${this.location.lat} ${this.location.lng}</div>`;
  }
}
