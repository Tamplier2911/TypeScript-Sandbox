import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  data: string;
  length: number;

  constructor(data: string) {
    super();
    this.data = data;
    this.length = data.length;
  }

  get getLength(): number {
    return this.data.length;
  }

  compareLogic(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }

  swapLogic(i: number, j: number): void {
    let charArr = this.data.split("");
    [charArr[i], charArr[j]] = [charArr[j], charArr[i]];
    this.data = charArr.join("");
  }
}
