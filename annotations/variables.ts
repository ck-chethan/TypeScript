// If variable initialization and declaration happened at a same line,
// Then TS will auto assign the type -> Type inference

// Type Allocation
// Primitives
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in

let date: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'green'];
let nums: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];


// Classes

class Car {

}
let car: Car = new Car();

// Objects

let point: {x:number; y:number} = {
  x: 10,
  y:20
}

// Function

const loadNumber: (i: number) => void = (i: number) => {
  console.log(i);
}


// When to use Function annotations
// 1-> Function that returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);

console.log(coordinates);


// 2->When we declare a variable at one line and initialize on other line

let a: number;
a=5;


// 3->Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAbovezero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0){
    numberAbovezero = numbers[i];
  }
  
}