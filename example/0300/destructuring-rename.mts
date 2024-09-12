// 次の記法はnumber型のxを宣言しているのではなく、
// xというプロパティにnumberという変数名を与えて代入しています
const { x: number } = { x: 10 };

console.log(number); // => 10
