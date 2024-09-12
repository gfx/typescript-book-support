// argのデフォルト引数は10
function f(arg = 10) {
  console.log(arg);
}
f(); // => 10
f(20); // => 20

// undefinedを明示的に渡してもデフォルト引数が使われます
f(undefined); // => 10
