"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// include fs module
var fs = require("fs");
// parse csv files as a utf-8 string
var data = fs.readFileSync(__dirname + "/../football.csv", "utf-8");
// spread string into entries
var entriesArray = [];
data.split("\n").forEach(function (el) { return entriesArray.push(el.split(",")); });
var finalData = [];
for (var i = 0; i < entriesArray.length - 1; i++) {
    finalData.push({
        date: entriesArray[i][0],
        homeTeam: entriesArray[i][1],
        awayTeam: entriesArray[i][2],
        homeGoals: entriesArray[i][3],
        awayGoals: entriesArray[i][4],
        winner: entriesArray[i][5],
        referee: entriesArray[i][6]
    });
}
// console.table(finalData);
console.log(finalData);
// ENUMS
var matchResults;
(function (matchResults) {
    matchResults["homeWin"] = "H";
    matchResults["awayWin"] = "A";
    matchResults["draw"] = "D";
})(matchResults || (matchResults = {}));
var homeWins = 0;
var awayWins = 0;
finalData.forEach(function (obj) {
    if (obj.homeTeam === "Man United" && obj.winner === matchResults.homeWin) {
        homeWins++;
    }
    else if (obj.awayTeam === "Man United" &&
        obj.winner === matchResults.awayWin) {
        awayWins++;
    }
});
console.log("Man United home wins: " + homeWins);
console.log("Man United away wins: " + awayWins);
var enumeration = function (data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var obj = data_1[_i];
        if (obj.winner === matchResults.draw)
            return matchResults.draw;
    }
    return matchResults.awayWin || matchResults.homeWin;
};
console.log(enumeration(finalData));
