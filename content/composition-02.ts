// type Transform<A, B> = (x: A)=>B;
// function map <A, B>(transform: Transform<A, B>): (array: A[])=>B[] {
//   return (array: A[]): B[] => {
//     const elements: B[] = [];

//     for (let i = 0; i < array.length; i += 1) {
//       const el: A = array[i];
//       elements.push(transform(el));
//     }

//     return elements;
//   };
// }





const convert = <A, B>(transform: (x: A)=>B) => (array: A[]): B[] => {
  const elements = [];
  for (let el of array) {
    elements.push(transform(el));
  }
  return elements;
};


const double = convert((x: number) => x * 2);
const doubles = double([1, 2, 3]);


const asString = convert(x => `${x}`);
const strings = asString([1, 2, 3, 4]);