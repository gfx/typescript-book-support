import type { Assert, Equals } from "./utility-types.mts";

// 配列の場合は、数値リテラル型とnumber型で意味は同じです
type ItemType1 = Array<string>[0];
type _T1 = Assert<Equals<ItemType1, string>>;

type ItemType2 = Array<string>[number];
type _T2 = Assert<Equals<ItemType2, string>>;

// 配列でなくても [key: number] という添字シグネチャがあれば添字参照ができます
type ObjectWithIndex = {
  [key: number]: string;
};
type _T3 = Assert<Equals<ObjectWithIndex[number], string>>;

// 組み込み型だと、ReadonlyArray<T>やArrayLike<T>に添字シグネチャがあります
type _T4 = Assert<Equals<ReadonlyArray<string>[number], string>>;
type _T5 = Assert<Equals<ArrayLike<string>[number], string>>;
