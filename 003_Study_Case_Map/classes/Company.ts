import faker from "faker";
import { DisplayMap } from "./Map";

export class Company {
  name: string;
  phrase: string;
  location: { lat: number; lng: number };

  constructor() {
    this.name = faker.company.companyName();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    };
  }

  public intro(): void {
    console.log(`We are - ${this.name} company!`);
    console.log(`${this.phrase}`);
  }

  public coords(): void {
    console.log(
      `Our cords are lat: ${this.location.lat} lng: ${this.location.lng}`
    );
  }

  public infoWindowContent(): string {
    return `<h4>Name: ${this.name}</h4>
            <div>Phrase: ${this.phrase}</div>
            <div>Position: ${this.location.lat} ${this.location.lng}</div>`;
  }
}
