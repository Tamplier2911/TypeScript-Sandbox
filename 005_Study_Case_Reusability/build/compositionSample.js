"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResults_1 = require("./MatchResults");
var fs_1 = __importDefault(require("fs"));
// create summary class that takes analyzer and output
var Summary = /** @class */ (function () {
    function Summary(analyzer, dataOutput) {
        this.analyzer = analyzer;
        this.dataOutput = dataOutput;
    }
    Summary.prototype.buildAndPrintReport = function (dataObjects) {
        var report = this.analyzer.run(dataObjects);
        this.dataOutput.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
// create WinsAnalysist class that implements Analyzer rules
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName) {
        this.team = teamName;
    }
    WinsAnalysis.prototype.run = function (dataObjects) {
        var _this = this;
        var homeWins = 0;
        var awayWins = 0;
        dataObjects.forEach(function (obj) {
            if (obj.homeTeam === _this.team && obj.winner === MatchResults_1.MatchResults.homeWin) {
                homeWins++;
            }
            else if (obj.awayTeam === _this.team &&
                obj.winner === MatchResults_1.MatchResults.awayWin) {
                awayWins++;
            }
        });
        return this.team + " -- home wins: " + homeWins + " | away wins: " + awayWins;
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
// create ConsoleReport class that implements OutputTarget rules
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport() {
    }
    ConsoleReport.prototype.print = function (outputData) {
        console.log(outputData);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
// create HTMLReport class that implements OutputTarget rules
var HTMLReport = /** @class */ (function () {
    function HTMLReport() {
    }
    HTMLReport.prototype.print = function (outputData) {
        var docStart = "<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <title>Document</title>\n    </head>\n    <body>";
        var docEnd = "</body></html>";
        var html = "<div><div>" + outputData + "</div></div>";
        fs_1.default.writeFileSync(__dirname + "/index.html", docStart + html + docEnd);
        console.log(html);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
// create instance of summary with analyzer and output reporter
var test = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
console.log(test);
// run output reporeter using analyzer data
test.buildAndPrintReport([
    {
        date: new Date(2018 - 10 - 28),
        homeTeam: "Tottenham",
        awayTeam: "Man City",
        homeGoals: 0,
        awayGoals: 1,
        winner: MatchResults_1.MatchResults.homeWin,
        referee: "K Friend"
    }
]);
