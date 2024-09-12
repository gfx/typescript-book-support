// Array<number>型のインスタンス `[1, 2, 3]` を生成します
const array = Array.of<number>(1, 2, 3);
console.log(array); // => [ 1, 2, 3 ]

// 型引数が自明なときは、型推論に任せて型引数を省略してもよいです
const array2 = Array.of(1, 2, 3);
