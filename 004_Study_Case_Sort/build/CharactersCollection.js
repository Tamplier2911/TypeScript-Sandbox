"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
        this.length = data.length;
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
}());
exports.CharactersCollection = CharactersCollection;
