class Rectangle {
    private _width: number;
    private _height: number;
  
    constructor(width: number, height: number) {
      this._width = width;
      this._height = height;
    }
  
    get area(): number {
      return this._width * this._height;
    }
  
    set width(value: number) {
      if (value > 0) {
        this._width = value;
      } else {
        throw new Error("Width must be positive");
      }
    }
  
    set height(value: number) {
      if (value > 0) {
        this._height = value;
      } else {
        throw new Error("Height must be positive");
      }
    }
  }
  
  const rect = new Rectangle(10, 5);
  console.log(rect.area); // 50
  rect.width = 15;
  console.log(rect.area); // 75
  