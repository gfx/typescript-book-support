type AnyArgs = ReadonlyArray<any>;

// 任意の型・任意の数の引数を受け取り、指定された型変数Tを返すジェネリックなコンストラクタ型
type Constructor<T> = new (...args: AnyArgs) => T;

// 任意のクラスオブジェクトを受け取り、インスタンスを作成して返す関数
function createInstance<T>(ctor: Constructor<T>, ...args: AnyArgs): T {
  return new ctor(...args);
}

class Point {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const c = createInstance(Point, 10, 20);
console.log(c); // => Point { x: 10, y: 20 }
