async function asyncFunc() {
  return "value";
}

// 引数をとらずPromise<string>を返す関数として扱えます
const promiseFunc: () => Promise<string> = asyncFunc;

promiseFunc().then((v) => {
  console.log(v); // => "value"
});
