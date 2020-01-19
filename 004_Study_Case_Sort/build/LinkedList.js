"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList(data) {
        this.data = data;
        this.length = data.length;
    }
    Object.defineProperty(LinkedList.prototype, "getLength", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.compareLogic = function (i, j) {
        return true;
    };
    LinkedList.prototype.swapLogic = function (i, j) { };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
