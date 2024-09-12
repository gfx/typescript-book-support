function f() {
  var x = "first";
  if (true) {
    var x = "second";
  }
  console.log(x); // => second
}
f();
