function f(optionalStr: string | null | undefined) {
  // JavaScriptでもTypeScriptでもあいまいな比較演算子==は通常使いません
  // 例外として `x == null` だけは `x === null || x === undefined` の意味で使います
  if (optionalStr == null) {
    // optionalStrはnullまたはundefined
    // ...
  } else {
    // optionalStrはstring
    // ...
  }
}
