//  Enums
import { MatchResults } from "./MatchResults";

export const dateStringToDate = (dateString: string): Date => {
  return new Date(
    dateString
      .split("/")
      .reverse()
      .join(",")
  );
};

export const stringToNumber = (data: string): number => {
  return parseInt(data);
};

export interface DataObject {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  winner: MatchResults;
  referee: string;
}

export const convertToArrayOfObjects = (
  entriesArray: string[][]
): DataObject[] => {
  let dataArray = [];
  for (let i = 0; i < entriesArray.length - 1; i++) {
    dataArray.push({
      date: dateStringToDate(entriesArray[i][0]),
      homeTeam: entriesArray[i][1],
      awayTeam: entriesArray[i][2],
      homeGoals: stringToNumber(entriesArray[i][3]),
      awayGoals: stringToNumber(entriesArray[i][4]),
      winner: entriesArray[i][5] as MatchResults,
      referee: entriesArray[i][6]
    });
  }
  return dataArray;
};

export const countHomeAndAwayWins = (
  dataStructure: DataObject[],
  teamName: string
): string => {
  let homeWins = 0;
  let awayWins = 0;
  dataStructure.forEach((obj: DataObject): void => {
    if (obj.homeTeam === teamName && obj.winner === MatchResults.homeWin) {
      homeWins++;
    } else if (
      obj.awayTeam === teamName &&
      obj.winner === MatchResults.awayWin
    ) {
      awayWins++;
    }
  });
  return `${teamName} home wins: ${homeWins} | away wins: ${awayWins}`;
};
