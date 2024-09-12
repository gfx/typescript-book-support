function asyncFunc() {
  return Promise.resolve("value");
}

asyncFunc().then((v) => {
  console.log(v); // => "value"
});
