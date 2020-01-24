"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.length = data.length;
        return _this;
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
}(Sorter_1.Sorter));
exports.NumbersCollection = NumbersCollection;
/*
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
*/
