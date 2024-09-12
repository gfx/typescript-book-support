import type { Assert, Equals } from "./utility-types.mts";

type ReturnType<T> = T extends (...args: any) => infer R ? R : never;

// 関数型に対してはその戻り値型を返します
type _T1 = Assert<Equals<ReturnType<() => number>, number>>;

// 関数型以外を渡すとneverを返します
type _T2 = Assert<Equals<ReturnType<number>, never>>;
