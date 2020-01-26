"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// fily system node module
var fs = require("fs");
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(filePath, fileName) {
        this.data = [];
        this.fileName = fileName;
        this.filePath = filePath;
    }
    CSVFileReader.prototype.read = function () {
        this.data = fs
            .readFileSync(__dirname + "/" + this.filePath + "/" + this.fileName, "utf-8")
            .split("\n")
            .map(function (el) { return el.split(","); });
        return this.data;
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
