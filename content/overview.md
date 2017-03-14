# Super TypeScript II Turbo: FP Remix


## Higher-Order Functions

```typescript
const items: Item[] = [/*...*/]; 

for (let i = 0; i < items.length; i += 1) {
  let item = items[i];
  /* ... */
}
```


```typescript
const update = (item: Item): Item => { /* ... */ };

function updateAll (items: Item[]): Item[] {
  const updates: Item[];
  for (let i = 0; i < items.length; i += 1) {
    const item: Item = items[i];
    updates.push(update(item));
  }
  return updates;
}
```


```typescript
type Transform = <A, B>(x: A) => B;

function map <A, B>(array: A[], transform: ): B[] {
  const elements: A[];
  for (let i = 0; i < items.length; i += 1) {
    const item: Item = items[i];
    updates.push(update(item));
  }
  return updates;
}
```



## Composition

```typescript
type Transform<A, B> = (x: A)=>B;
function map <A, B>(transform: Transform, array: A[]): B[] {
  // ...
}
```


```typescript
function map ():  {

}
```


```typescript
const multiply = (x: number) => (y: number) => x * y;

const double = multiply(2);
const triple = multiply(3);
const quadruple = multiply(4);
```


## Functors

```typescript
[1, 2, 3]
  .map(double)
  .map(triple);
```


## Async / Await

```typescript
const loadJSON = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
```
