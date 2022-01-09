const add = (a: number, b: number): number => {
  return a + b;
};
// we should always give annotations to function parameters and may/may not give return type to output which will infered
// so it's good to add annotations to return type instead

const sub = (a: number, b: number) => a - b; // Return number

const subtract = (a: number, b: number) => {
  a - b;
}; // Return void

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message); // Never reach the End of the function
};

const throwErr = (message: string): void => {
  if (message) {
    throw new Error(message);
  }
};

const todayWeather = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = (foreCast: { date: Date; weather: string }): void => {
  console.log(foreCast.date);
  console.log(foreCast.weather);
};

logWeather(todayWeather);

const logeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logeather(todayWeather);
