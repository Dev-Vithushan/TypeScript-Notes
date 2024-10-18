class Shape {
    // Default getArea method, returning 0 for base class

    constructor(){
        
    }
    getArea(): number {
      return 0;
    }
  
    // Method to calculate and display the area
    calculateArea(): void {
      console.log(`The area of this shape is: ${this.getArea()}`);
    }
  }
  
  // Circle class extending Shape
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super(); // Call the constructor of Shape
      this.radius = radius;
    }
  
    // Overriding getArea method for Circle
    getArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Rectangle class extending Shape
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    // Overriding getArea method for Rectangle
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  // Triangle class extending Shape
  class Triangle extends Shape {
    base: number;
    height: number;
  
    constructor(base: number, height: number) {
      super();
      this.base = base;
      this.height = height;
    }
  
    // Overriding getArea method for Triangle
    getArea(): number {
      return (this.base * this.height) / 2;
    }
  }
  
  // Usage
  const circle = new Circle(5);
  circle.calculateArea(); // The area of this shape is: 78.53981633974483
  
  const rectangle = new Rectangle(10, 5);
  rectangle.calculateArea(); // The area of this shape is: 50
  
  const triangle = new Triangle(10, 5);
  triangle.calculateArea(); // The area of this shape is: 25
  