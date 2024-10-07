# Data Types in TS

## TypeScript adds strict types to JavaScript
```ts
let isDone: boolean = false;
let count: number = 10;
let name: string = "John";
```

## You can also define arrays and objects with specific types.
```ts
let numbers: number[] = [1, 2, 3];
let user: { name: string, age: number } = { name: "Alice", age: 25 };
```

## Union Types allow a variable to take multiple types:

```ts
let value: number | string;
value = 5;
value = "Hello";

```

