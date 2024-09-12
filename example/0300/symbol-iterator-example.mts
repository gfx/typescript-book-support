class MyList<T> {
  /* MyListの実装は省略 */

  // for-ofで反復処理できるようにするためのメソッド
  [Symbol.iterator](): Iterator<T> {
    throw new Error("実装は省略");
  }
}
