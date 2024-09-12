import type { Assert, Equals } from "./utility-types.mts";
type IsString<T> = T extends string ? true : false;

// 分配を起こす呼び出し
type R1 = IsString<string | number>;
// この結果は`true | false`、つまりboolean型に等しくなります
type _T1 = Assert<Equals<R1, boolean>>;

// 分配を展開すると次のようになります
type R2 = IsString<string> | IsString<number>;
// さらに式を展開すると次のようになります
type R3 =
  | (string extends string ? true : false)
  | (number extends string ? true : false);
// すべてR1と同じ結果になります
type _T2 = Assert<Equals<R2, boolean>>;
type _T3 = Assert<Equals<R3, boolean>>;
