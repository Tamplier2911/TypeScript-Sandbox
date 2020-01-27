// fily system node module
const fs = require("fs");

export class CSVFileReader {
  data: string[][] = [];
  fileName: string;
  filePath: string;
  constructor(filePath: string, fileName: string) {
    this.fileName = fileName;
    this.filePath = filePath;
  }
  read(): string[][] {
    this.data = fs
      .readFileSync(`${__dirname}/${this.filePath}/${this.fileName}`, "utf-8")
      .split("\n")
      .map((el: string): string[] => el.split(","));
    return this.data;
  }
}
