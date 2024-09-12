// "foo" | "bar" | "baz" という文字列リテラルの共用体型を引数とする関数
function f(arg: "foo" | "bar" | "baz") {
  /* ... */
}

const value: string = "foo";

// ここでvalueはstringなのでf()には渡せません
// f(value); // コンパイルエラー

if (value === "foo") {
  // ここでvalueはナローイングによって"foo"になるのでf()に渡せるようになります
  f(value);
}
