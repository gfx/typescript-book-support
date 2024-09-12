// valueは共用体型string | numberです
let value: string | number;

// "foo" はstringなので代入可能
value = "foo";

// valueはここでナローイングによってstringになります
// 次の代入したあとのvalueにカーソルをあてると、型がstringのみになっていることがわかります
// たとえば、lengthプロパティはnumberには存在しませんが、コンパイルが通ります
// 逆に、number特有のプロパティやメソッドを参照するとコンパイルエラーになります
console.log(value.length); // => 3

// 42はnumberなので代入可能
value = 42;

// valueはここでナローイングによってnumberになります
// 次の代入したあとのvalueにカーソルをあてると、型がnumberのみになっていることがわかります
// たとえば、toExponentialメソッドはstringには存在しないが、コンパイルが通ります
console.log(value.toExponential()); // => 4.2e+1
