import { DataObject } from "./utils";
import { MatchResults } from "./MatchResults";

import fs from "fs";

// create analyzer interface
interface Analyzer {
  run(data: DataObject[]): string;
}

// create data output interface
interface OutputTarget {
  print(report: string): void;
}

// create summary class that takes analyzer and output
export class Summary {
  constructor(public analyzer: Analyzer, public dataOutput: OutputTarget) {}
  buildAndPrintReport(dataObjects: DataObject[]): void {
    const report = this.analyzer.run(dataObjects);
    this.dataOutput.print(report);
  }
}

// create WinsAnalysist class that implements Analyzer rules
export class WinsAnalysis implements Analyzer {
  team: string;
  constructor(teamName: string) {
    this.team = teamName;
  }
  run(dataObjects: DataObject[]): string {
    let homeWins = 0;
    let awayWins = 0;
    dataObjects.forEach((obj: DataObject): void => {
      if (obj.homeTeam === this.team && obj.winner === MatchResults.homeWin) {
        homeWins++;
      } else if (
        obj.awayTeam === this.team &&
        obj.winner === MatchResults.awayWin
      ) {
        awayWins++;
      }
    });
    return `${this.team} -- home wins: ${homeWins} | away wins: ${awayWins}`;
  }
}

// create ConsoleReport class that implements OutputTarget rules
export class ConsoleReport implements OutputTarget {
  print(outputData: string): void {
    console.log(outputData);
  }
}

// create HTMLReport class that implements OutputTarget rules
export class HTMLReport implements OutputTarget {
  print(outputData: string): void {
    const docStart = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>`;
    const docEnd = `</body></html>`;
    const html = `<div><div>${outputData}</div></div>`;
    fs.writeFileSync(`${__dirname}/index.html`, docStart + html + docEnd);
    console.log(html);
  }
}

// create instance of summary with analyzer and output reporter
let test = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
console.log(test);

// run output reporeter using analyzer data
test.buildAndPrintReport([
  {
    date: new Date(2018 - 10 - 28),
    homeTeam: "Tottenham",
    awayTeam: "Man City",
    homeGoals: 0,
    awayGoals: 1,
    winner: MatchResults.homeWin,
    referee: "K Friend"
  }
]);
