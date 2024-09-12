const a = [10, 20, 30];

const iterator = a[Symbol.iterator]();
while (true) {
  const { value: item, done } = iterator.next();
  if (done) {
    break;
  }

  console.log(item); // => 10, 20, 30の順で出力
}
