// バグのために型安全性が破壊される例

function isString(x: unknown): x is string {
  return typeof x === "number"; // 判定ロジックを間違えた！
}

function f(value: unknown) {
  if (isString(value)) {
    // コンパイラはvalueがstringだと認識するが、実際にはnumberなのでランタイムエラーになります
    console.log(value.trim()); // TypeError: value.trim is not a function
  }
}

f(42); // ランタイムエラー
