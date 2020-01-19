export class NumbersCollection {
  data: number[];
  length: number;
  constructor(data: number[]) {
    this.data = data;
    this.length = data.length;
  }
  get getLength(): number {
    return this.data.length;
  }
  compareLogic(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
  swapLogic(i: number, j: number): void {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}
