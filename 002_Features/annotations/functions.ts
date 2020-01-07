// Type Annotation and Inference - Functions

// repeat - declaring variable as a function

// what type of arguments we expect to get
// (a: number, b: number)

// annotate what value we expect to be returned
// => number

// annotate type for each of the argument passed in
// (a: number, b: number)

// variable annotation for function are literally - (a: number, b: number) => number

const sumTwos: (a: number, b: number) => number = (a, b) => {
  return b ? sumTwos(a ^ b, (a & b) << 1) : a;
};

// type annotation for function it self
// define types for arguments : for return value
// when return annotated, TS will read function body and pop errors if there any
const addTwo = (a: number, b: number): number => {
  return b ? addTwo(a ^ b, (a & b) << 1) : a;
};

// (a: number, b: number): number - annotations for functions MUST be written no matter what
// because anytime we do not put return statement, return type will be inferenced as void

// annotations for function declaration
function findSingle(arr: number[]): number {
  return arr.reduce((acc: number, el: number) => acc ^ el, 0);
}

// annotation for anonymous function asigned to a variable
const multiply = function(a: number, b: number): number {
  return a * b;
};

// void type - means that function going not return anything
// function with return type of void, can however return null or undefined
const logger = (message: string): void => {
  console.log(message);
  return null || undefined;
};

// never type - means that end of the function will be never reached
const throwErr = (message: string): never => {
  throw new Error(message);
};

// Destructuring with Annotations
const todaysWeather = {
  date: new Date(),
  weather: "Sunny."
};

const logTodaysWeather = (obj: { date: Date; weather: string }): string => {
  return obj.weather;
};

// in order to destructure object in functions body, we just list destructuring portion
// on the left, separationg with annotation portion using colon
const logTodayWeatherDes = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): string => {
  return date + " " + weather;
};
