## Functions with Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## Optional parameters can be specified using **(?)**

```ts
function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}
```




