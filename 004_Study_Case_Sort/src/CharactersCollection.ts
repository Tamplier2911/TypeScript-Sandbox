export class CharactersCollection {
  data: string;
  length: number;

  constructor(data: string) {
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
