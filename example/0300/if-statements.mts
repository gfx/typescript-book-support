function f(x: number) {
  if (x % 2 == 0) {
    // ifブロック
    console.log(`${x}は偶数です`);
  } else {
    // elseブロック
    console.log(`${x}は奇数です`);
  }
}

f(10); // => "10は偶数です"
f(11); // => "11は偶数です"
