const iterable = {
  [Symbol.iterator]() {
    // 10, 20, 30の順でvalueを返すiteratorを生成します
    return {
      value: 0,
      next() {
        if (this.value < 30) {
          this.value += 10;
          return { value: this.value, done: false };
        } else {
          // イテレータの終了は `done: true` で伝えます
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const item of iterable) {
  console.log(item); // 10, 20, 30 の順で表示します
}
