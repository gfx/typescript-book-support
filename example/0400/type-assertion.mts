const a: unknown = "foo";

const b = a as string; // 書き手はaがstring型であることを確信しているのでOK
console.log(b.length); // => 3
