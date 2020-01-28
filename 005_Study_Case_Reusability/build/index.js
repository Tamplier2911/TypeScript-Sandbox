"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CSV Reader
var CSVFileReader_1 = require("./CSVFileReader");
// Utils
var utils_1 = require("./utils");
// Composition Classes
var compositionSample_1 = require("./compositionSample");
// creting instance of file reader
var reader = new CSVFileReader_1.CSVFileReader("..", "football.csv");
// save result of read file in entries array
var entriesArray = reader.read();
// perform data transformation with util function
var finalData = utils_1.convertToArrayOfObjects(entriesArray);
console.log(finalData);
// perform data analys with util function
var result = utils_1.countHomeAndAwayWins(finalData, "Man United");
console.log(result);
// perform data analys with composition approach
var test = new compositionSample_1.Summary(new compositionSample_1.WinsAnalysis("Man United"), new compositionSample_1.HTMLReport());
console.log(test);
test.buildAndPrintReport(finalData);
