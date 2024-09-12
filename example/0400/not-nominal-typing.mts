// 構造型を採用しているTypeScriptではコンパイルが通る例
// ArrayLikeTypeは、lengthを持ち、number型のインデックスシグネチャを持つ配列のような型
type ArrayLikeType<ElementType> = {
  length: number;
  [n: number]: ElementType;
};

// 配列のような型について、要素をすべてconsole.logで印字する関数
function printArrayLikeTypeElements<T>(arrayLike: ArrayLikeType<T>) {
  for (let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);
  }
}

// 文字列は添字アクセスができてlengthプロパティもあるので、ArrayLikeType<string>に代入可能です！
// 1行に一文字ずつ "f", "o", "o" が印字されます
printArrayLikeTypeElements("foo");
