// 配列型
const ary = [1, 2, 3] as const;
// aryの型は `readonly [1, 2, 3]` になります
// `as const`がなければ `Array<number>` になります

const obj = {
  str: "str",
  num: 42,
  bool: true,
} as const;
// objの型は `{ readonly str: "str", readonly num: 42, readonly bool: true }` になります
// `as const`がなければ `{ str: string, num: number, bool: boolean }` になります
