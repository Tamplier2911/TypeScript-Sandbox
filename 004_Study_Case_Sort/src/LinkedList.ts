export class LinkedList {
  data: LinkedList;
  length: number;

  constructor(data: LinkedList) {
    this.data = data;
    this.length = data.length;
  }

  get getLength(): number {
    return this.data.length;
  }

  compareLogic(i: number, j: number): boolean {
    return true;
  }

  swapLogic(i: number, j: number): void {}
}
