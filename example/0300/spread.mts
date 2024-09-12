function sum(...args: ReadonlyArray<number>) {
  return args.reduce((total, n) => total + n, 0);
}

// リストを渡します
console.log(sum(1, 2, 3));

// 配列を渡すときは、スプレッド構文を使います
const values = [1, 2, 3];
console.log(sum(...values));
