function printLengthOfString(value: string | null | undefined) {
  if (value != null) {
    // ここでvalueはstring型になるので、プロパティアクセスが可能
    console.log(value.length);
  }
  // valueがnullのときは何もしません
}

printLengthOfString("foo"); // 3
printLengthOfString(null); // 実行時エラーにはならず、何も出力されません
