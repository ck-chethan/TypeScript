const drinks = {
  color: 'Brown',
  carbonate: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
