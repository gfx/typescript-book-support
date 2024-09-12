import type { Assert, Equals } from "./utility-types.mts";

type ArrayElement<T> = T extends Array<infer U> ? U : never;

// 配列の要素型を得る
type _T1 = Assert<Equals<ArrayElement<Array<number>>, number>>;

// タプルの場合はタプルと配列の代入可能性に基づいて、共用体型が得られます
// ここで `[number, string]` は `Array<number | string>` に代入可能なので、`U` には `number | string` が束縛されます
type _T2 = Assert<Equals<ArrayElement<[number, string]>, number | string>>;
