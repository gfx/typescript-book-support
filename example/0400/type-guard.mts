function f(value: string | number) {
  // typeofによる型ガードで、条件分岐の中で型を限定します
  if (typeof value === "string") {
    // ここでvalueはナローイングによってstringになります
    // よってnumberにないプロパティを参照してもコンパイルが通ります
    console.log(value.length); // => 3
  } else {
    // ここでvalueはナローイングによってnumberになります
    // よってstringにないメソッドを呼んでもコンパイルが通ります
    console.log(value.toExponential()); // => 4.2e+1
  }
}
