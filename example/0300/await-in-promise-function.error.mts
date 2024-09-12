function promiseFunc() {
  // これはコンパイルエラー
  // awaitキーワードはasync関数の中でしか使えません
  return await Promise.resolve("value");
}
// [TS1308]: 'await' expressions are only allowed within async functions and at the top levels of modules.
