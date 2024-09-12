import type { Assert, Equals } from "./utility-types.mts";

// タプルの要素を数値リテラル型で参照します
type IdAndName = [number, string];

// IdAndName[0]はnumber型
type _T1 = Assert<Equals<IdAndName[0], number>>;
// IdAndName[1]はstring型
type _T2 = Assert<Equals<IdAndName[1], string>>;
// IdAndName[number]はタプルの要素の型をすべて含む共用体型
type _T3 = Assert<Equals<IdAndName[number], number | string>>;
