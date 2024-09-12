async function asyncFunc() {
  // これはOK
  // awaitキーワードはasync関数の中は使えます
  const value = await Promise.resolve("foo");
  console.log(value); // => "foo"
}

// これもOK
// ESモジュールファイルではトップレベルでもawaitキーワードを使えます
console.log(await Promise.resolve("bar")); // => "bar"
