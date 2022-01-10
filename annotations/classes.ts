class Vehicl {
  // private drive(): void {
  //   console.log('Drooom');
  // }

  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // } This Part is equivalent to beloww one

  constructor(public color: string) {}

  protected honk(): void {
    console.log('peem peem');
  }
}

class Cars extends Vehicl {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Vrooom');
  }

  startDrivingProcess() {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicl('red');
console.log(vehicle.color);

// vehicle.drive();
// vehicle.honk();

const acars = new Cars(5, 'red');
acars.startDrivingProcess();
console.log(acars.wheels);
console.log(acars.color);
//acars.honk();
