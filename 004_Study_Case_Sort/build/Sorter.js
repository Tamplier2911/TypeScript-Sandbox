"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.bubbleSort = function () {
        for (var i = this.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                if (this.compareLogic(j, j + 1)) {
                    this.swapLogic(j, j + 1);
                }
            }
        }
        return this;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
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
