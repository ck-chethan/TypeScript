const carMakers = ['Tesla', 'Tata', 'Mercedes']; // String type

const carMaker: string[] = []; // Infer as any type, so we need to give

const dates = [new Date(), new Date()]; // Date type

const cars = [['de32e3'], ['9u98u98'], ['hkjhk']]; // String Type

const bikes: string[][] = []; // Initialize 2D string array.

// Help with inference when extracting the value

const carss = carMakers[0];
const carst = carMakers.pop();

// Preventing incompatible values

// carMakers.push(100); // It'll throw error

// Help with map, filter, reduce ....

carMakers.map((car) => {
  return car;
}); // We'll get the autocomplete methods

// Flexible types

const importantDates: (string | Date)[] = [new Date()]; // Type = (string | Date)[]
importantDates.push('2030-10-11');
importantDates.push(new Date());
