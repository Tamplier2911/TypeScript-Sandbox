"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CSV Reader
var CSVFileReader_1 = require("./CSVFileReader");
// Utils
var utils_1 = require("./utils");
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
