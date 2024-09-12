/**
 * Tがtrue型のときはコンパイルが通ります
 * Tがtrue型でないときはコンパイルエラーを起こします
 */
export type Assert<T extends true> = T;

/**
 * X, Yが等しいときにtrue型を返し、そうでないときにfalse型を返します
 */
export type Equals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <U>() => U extends Y ? 1 : 2
    ? true
    : false;
