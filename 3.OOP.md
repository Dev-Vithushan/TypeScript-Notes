# OOP with TypeScript 
TypeScript introduces object-oriented programming concepts like classes, interfaces, and inheritance.

## Classes
```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let person = new Person("John");
person.greet();
```

## Inheritance

```ts
class Employee extends Person {
  role: string;
  constructor(name: string, role: string) {
    super(name);
    this.role = role;
  }

  work() {
    console.log(`${this.name} is working as a ${this.role}`);
  }
}

let employee = new Employee("Alice", "Developer");
employee.work();
```

## Access Modifiers

TypeScript provides **public**, **private**, and **protected** access modifiers to control visibility.

`Public:` Accessible anywhere (default).

`Private:` Only accessible within the class.

`Protected:` Accessible within the class and its subclasses.