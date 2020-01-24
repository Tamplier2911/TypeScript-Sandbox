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
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super.call(this) || this;
        _this.head = null;
        _this.tail = null;
        _this.length = 0;
        return _this;
    }
    LinkedList.prototype.push = function (value) {
        var newNode = new Node(value);
        if (this.length === 0 && !this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else if (this.tail && this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    };
    LinkedList.prototype.pop = function () {
        if (!this.head)
            return undefined;
        var currentNode = this.head;
        var newTail = currentNode;
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        return currentNode.value;
    };
    LinkedList.prototype.unshift = function (value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this.length;
    };
    LinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        var value = this.head.value;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return value;
    };
    LinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length)
            throw new Error("Index is out of bounds.");
        var currentNode = this.head;
        var count = 0;
        while (count !== index && currentNode) {
            currentNode = currentNode.next;
            count++;
        }
        if (currentNode)
            return currentNode;
        throw new Error("Index is out of bounds.");
    };
    LinkedList.prototype.set = function (index, value) {
        var node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === this.length) {
            return !!this.push(value);
        }
        else if (index === 0) {
            return !!this.unshift(value);
        }
        else {
            var newNode = new Node(value);
            var prevNode = this.get(index - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return true;
        }
    };
    LinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this.length)
            return undefined;
        if (index === this.length - 1) {
            return this.pop();
        }
        else if (index === 0) {
            return this.shift();
        }
        else {
            var prevNode = this.get(index - 1);
            var removedNode = prevNode.next;
            if (removedNode && removedNode.next) {
                prevNode.next = removedNode.next;
                this.length--;
                return removedNode.value;
            }
        }
    };
    LinkedList.prototype.reverse = function () {
        var _a;
        var current = this.head;
        _a = [this.tail, this.head], this.head = _a[0], this.tail = _a[1];
        var prev = null;
        var next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    };
    LinkedList.prototype.drop = function () {
        this.head === null;
        this.head === null;
        return this;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var currentNode = this.head;
        while (currentNode) {
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    };
    Object.defineProperty(LinkedList.prototype, "getLength", {
        get: function () {
            return this.length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.compareLogic = function (i, j) {
        if (!this.head)
            throw new Error("Linked List is empty.");
        return this.get(i).value > this.get(j).value;
    };
    LinkedList.prototype.swapLogic = function (i, j) {
        var _a;
        var leftNode = this.get(i);
        var rightNode = this.get(j);
        _a = [rightNode.value, leftNode.value], leftNode.value = _a[0], rightNode.value = _a[1];
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
