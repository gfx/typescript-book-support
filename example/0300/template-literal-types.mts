// "foo"または"bar"という型である、FooOrBarを定義します
type FooOrBar = "foo" | "bar";

// 文字列テンプレート中でFooOrBarを使います
// このとき、TypeAとTypeBは等しい型になります
type TypeA = `${FooOrBar}_id`;
type TypeB = "foo_id" | "bar_id";
