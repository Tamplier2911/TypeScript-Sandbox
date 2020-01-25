import { match } from "assert";

// include fs module
const fs = require("fs");

// parse csv files as a utf-8 string
const data: string = fs.readFileSync(`${__dirname}/../football.csv`, "utf-8");

// spread string into entries
const entriesArray: string[][] = [];
data.split("\n").forEach((el: string) => entriesArray.push(el.split(",")));
// console.log(entriesArray);

// parse entries to an array of objects

interface DataObject {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeGoals: string;
  awayGoals: string;
  winner: string;
  referee: string;
}

const finalData: DataObject[] = [];
for (let i = 0; i < entriesArray.length - 1; i++) {
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
enum matchResults {
  homeWin = "H",
  awayWin = "A",
  draw = "D"
}

let homeWins = 0;
let awayWins = 0;
finalData.forEach((obj: DataObject): void => {
  if (obj.homeTeam === "Man United" && obj.winner === matchResults.homeWin) {
    homeWins++;
  } else if (
    obj.awayTeam === "Man United" &&
    obj.winner === matchResults.awayWin
  ) {
    awayWins++;
  }
});
console.log(`Man United home wins: ${homeWins}`);
console.log(`Man United away wins: ${awayWins}`);

const enumeration = (data: DataObject[]): matchResults => {
  for (let obj of data) {
    if (obj.winner === matchResults.draw) return matchResults.draw;
  }
  return matchResults.awayWin || matchResults.homeWin;
};
console.log(enumeration(finalData));
