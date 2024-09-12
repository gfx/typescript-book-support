function f(x: string | number | null) {
  // x は string または number
  if (typeof x === "string") {
    // ifブロック内ではxはstring型に推論されます
  } else {
    // elseブロックではもともとの型の集合（string, number, null）から
    // stringを除いた集合、つまり `number | null` に推論されます
  }
}
