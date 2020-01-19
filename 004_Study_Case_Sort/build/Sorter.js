"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.bubbleSort = function () {
        for (var i = this.collection.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                if (this.collection.compareLogic(j, j + 1)) {
                    this.collection.swapLogic(j, j + 1);
                }
            }
        }
        return this.collection;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
