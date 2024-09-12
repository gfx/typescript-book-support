// 配列の分割代入
const a = [1, 2, 3];
const [f, s, t] = a;
console.log({ f, s, t }); // => { f: 1, s: 2, t: 3 }

// オブジェクトの分割代入
const o = { foo: 10, bar: 20 };
const { foo, bar } = o;
console.log({ foo, bar }); // => { foo: 10, bar: 20 }
