function* g() {
  console.log("a");
  yield 1;
  console.log("b");
  yield 2;
  console.log("c");
  yield 3;
  console.log("d");
}

// ジェネレータはイテレート可能なのでfor-ofで反復処理できます
const generator = g();
for (const value of generator) {
  console.log(value);
}
// 出力は a, 1, b, 2, c, 3, d の順
