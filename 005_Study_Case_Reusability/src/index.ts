// CSV Reader
import { CSVFileReader } from "./CSVFileReader";

// Utils
import { convertToArrayOfObjects, countHomeAndAwayWins } from "./utils";

// creting instance of file reader
let reader = new CSVFileReader("..", "football.csv");

// save result of read file in entries array
const entriesArray = reader.read();

// perform data transformation with util function
const finalData = convertToArrayOfObjects(entriesArray);
console.log(finalData);

// perform data analys with util function
const result = countHomeAndAwayWins(finalData, "Man United");
console.log(result);
