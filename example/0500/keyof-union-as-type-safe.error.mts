type T1 = { a: string; b: string };
type T2 = { b: string; c: string };

// オブジェクト型TのプロパティKの型を返す型関数
// `K extends keyof T`によって、`T[K]`が型安全であることを保証します
type ValueTypeOf<T, K extends keyof T> = T[K];

// `T1["a"]`は妥当です
// `T2["a"]`は妥当ではありません
// よって`(T1 | T2)["a"]`は妥当ではなく、次の行はコンパイルエラーになります
type ValueOfUnion = ValueTypeOf<T1 | T2, "a">;
