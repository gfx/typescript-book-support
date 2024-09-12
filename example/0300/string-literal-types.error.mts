let s: "foo" | "bar";

// これは禁止
s = "baz";
// コンパイルエラー！
// Type '"baz"' is not assignable to type '"foo" | "bar"'.
