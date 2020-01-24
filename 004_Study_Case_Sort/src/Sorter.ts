interface Sortable {
  length: number;
  compareLogic(i: number, j: number): boolean;
  swapLogic(i: number, j: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compareLogic(i: number, j: number): boolean;
  abstract swapLogic(i: number, j: number): void;

  bubbleSort() {
    for (let i = this.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.compareLogic(j, j + 1)) {
          this.swapLogic(j, j + 1);
        }
      }
    }
    return this;
  }
}

/*
export class Sorter {
  collection: Sortable;

  constructor(collection: Sortable) {
    this.collection = collection;
  }

  bubbleSort() {
    for (let i = this.collection.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.collection.compareLogic(j, j + 1)) {
          this.collection.swapLogic(j, j + 1);
        }
      }
    }
    return this.collection;
  }
}
*/
