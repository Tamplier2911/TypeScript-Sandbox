"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Enums
var MatchResults_1 = require("./MatchResults");
exports.dateStringToDate = function (dateString) {
    return new Date(dateString
        .split("/")
        .reverse()
        .join(","));
};
exports.stringToNumber = function (data) {
    return parseInt(data);
};
exports.convertToArrayOfObjects = function (entriesArray) {
    var dataArray = [];
    for (var i = 0; i < entriesArray.length - 1; i++) {
        dataArray.push({
            date: exports.dateStringToDate(entriesArray[i][0]),
            homeTeam: entriesArray[i][1],
            awayTeam: entriesArray[i][2],
            homeGoals: exports.stringToNumber(entriesArray[i][3]),
            awayGoals: exports.stringToNumber(entriesArray[i][4]),
            winner: entriesArray[i][5],
            referee: entriesArray[i][6]
        });
    }
    return dataArray;
};
exports.countHomeAndAwayWins = function (dataStructure, teamName) {
    var homeWins = 0;
    var awayWins = 0;
    dataStructure.forEach(function (obj) {
        if (obj.homeTeam === teamName && obj.winner === MatchResults_1.MatchResults.homeWin) {
            homeWins++;
        }
        else if (obj.awayTeam === teamName &&
            obj.winner === MatchResults_1.MatchResults.awayWin) {
            awayWins++;
        }
    });
    return teamName + " home wins: " + homeWins + " | away wins: " + awayWins;
};
