function sum(...args: ReadonlyArray<number>) {
  // argsは配列として受け取ります
  let value = 0;
  for (const arg of args) {
    value += arg;
  }
  return value;
}

// argsは配列ではなくリストとして渡します
console.log(sum(1, 2, 3)); // => 6
