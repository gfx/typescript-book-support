class MyList<T> implements Iterable<T> {
  /* MyListの実装は省略 */

  // [Symbol.iterator]は、Iterable<T>が実装を要求するメソッド
  [Symbol.iterator](): Iterator<T> {
    throw new Error("実装は省略");
  }
}
