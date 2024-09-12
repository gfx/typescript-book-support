// 次のgはfとまったく同じ意味
// arg?の`?`はTypeScriptの構文で、argが省略可能でundefinedを許容するという意味
// このときargの型はnumber | undefinedと等しいです
function g(arg?: number) {
  if (arg === undefined) {
    arg = 10;
  }
  console.log(arg);
}

// OK. argはundefined
g(); // => 10

// OK. argは20
g(20); // => 20

// OK. 省略可能な引数には明示的にundefinedも渡せます
g(undefined); // => 10
