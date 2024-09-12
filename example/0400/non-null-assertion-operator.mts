function printLengthOfString(value: string | null | undefined) {
  const a = value!;
  // ここでaはstring型になるので、プロパティアクセスが可能
  // ただし、このときvalueがnullの場合は実行時エラーになります
  console.log(a.length);
}

printLengthOfString("foo"); // 3
printLengthOfString(null); // ここで実行時エラー
