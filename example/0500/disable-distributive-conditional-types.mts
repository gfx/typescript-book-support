import type { Assert, Equals } from "./utility-types.mts";

// 分配を起こす版
//`T extends any`はどんな型でも真になる条件なので、分配を起こすためだけに条件付き型を使っています
type ToArray<T> = T extends any ? Array<T> : never;
// 分配を起こさない（ND: non-distributive）版
type ToArrayND<T> = [T] extends [any] ? Array<T> : never;

// ToArrayは、分配により共用体型の各要素に対して別々に適用されます
type R1 = ToArray<string | number>;
type _T1 = Assert<Equals<R1, Array<string> | Array<number>>>;

// ToArrayNDは分配を起こさないので、ToArrayND<T>はArray<T>に等しいです
type R2 = ToArrayND<string | number>;
type _T2 = Assert<Equals<R2, Array<string | number>>>;
