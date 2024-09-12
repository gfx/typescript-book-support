// このコードはstrictモードでコンパイルエラーになります
class Dinosaur {
  // コンストラクタを定義しないと、プロパティ定義がコンパイルエラーになります
  name: string;
  // ^
  // error TS2564: Property 'name' has no initializer and is not definitely assigned in the constructor.

  period: string;
  // ^
  // error TS2564: Property 'period' has no initializer and is not definitely assigned in the constructor.
}
