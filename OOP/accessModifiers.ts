class Car {
    protected brand: string;
    private year: number;
  
    constructor(brand: string, year: number) {
      this.brand = brand;
      this.year = year;
    }
  
    getBrand() {
      return this.brand;
    }
  }
  
  class ElectricCar extends Car {
    batteryLife: number;
  
    constructor(brand: string, year: number, batteryLife: number) {
      super(brand, year);
      this.batteryLife = batteryLife;
    }
  
    displayInfo() {
      console.log(`${this.brand} car with battery life of ${this.batteryLife} hours`);
    }
  }
  
  const tesla = new ElectricCar("Tesla", 2021, 8);
  tesla.displayInfo(); // "Tesla car with battery life of 8 hours"
  