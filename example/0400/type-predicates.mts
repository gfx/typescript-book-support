function isString(x: unknown): x is string {
  return typeof x === "string";
}

function printLengthOfString(value: string | null | undefined) {
  if (isString(value)) {
    // ここでvalueはナローイングによってstring型になるので、stringのプロパティアクセスが可能
    console.log(value.trim()); // 両端の空白を取り除いたものを印字
  }
}

printLengthOfString("foo"); // 3
