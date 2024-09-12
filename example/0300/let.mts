function f() {
  let x = "first";
  if (true) {
    let x = "second";
  }
  console.log(x); // => first
}
f();
