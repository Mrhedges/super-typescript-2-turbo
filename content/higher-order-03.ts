interface Transform<A, B> {
  (x: A): B;
}

function map <A, B>(array: A[], transform: Transform<A, B>): B[] {
  const elements: B[] = [];
  for (let i = 0; i < array.length; i += 1) {
    const item: A = array[i];
    elements.push(transform(item));
  }
  return elements;
}



const numbers = [1, 2, 3];
const strings = map(numbers, x => `${x}`);