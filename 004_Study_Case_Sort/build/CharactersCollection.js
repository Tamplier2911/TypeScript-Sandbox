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
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    function CharactersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.length = data.length;
        return _this;
    }
    Object.defineProperty(CharactersCollection.prototype, "getLength", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compareLogic = function (i, j) {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    };
    CharactersCollection.prototype.swapLogic = function (i, j) {
        var _a;
        var charArr = this.data.split("");
        _a = [charArr[j], charArr[i]], charArr[i] = _a[0], charArr[j] = _a[1];
        this.data = charArr.join("");
    };
    return CharactersCollection;
}(Sorter_1.Sorter));
exports.CharactersCollection = CharactersCollection;
