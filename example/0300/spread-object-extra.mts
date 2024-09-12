const o1 = { ...new Date() }; // => {}
console.log(o1); // => {}

class Foo {
  a = 1;
  b = 2;
}
class Bar extends Foo {
  c = 3;
}
const o2 = new Bar();
console.log({ ...o2 }); // => { a: 1, b: 2, c: 3 }
