"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
        this.length = data.length;
    }
    Object.defineProperty(NumbersCollection.prototype, "getLength", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compareLogic = function (i, j) {
        return this.data[i] > this.data[j];
    };
    NumbersCollection.prototype.swapLogic = function (i, j) {
        var _a;
        _a = [this.data[j], this.data[i]], this.data[i] = _a[0], this.data[j] = _a[1];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
