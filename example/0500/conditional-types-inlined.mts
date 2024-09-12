import type { Assert, Equals } from "./utility-types.mts";

// `ToArray<string | number>` を手動で展開します
// `ToArray<T>`の定義は`type ToArray<T> = T extends any ? Array<T> : never`とします
type R1 = string | number extends any ? Array<string | number> : never;

// 戻り値型は分配を起こさない版の`ToArrayND<string | number>`に一致します
type _T1 = Assert<Equals<R1, Array<string | number>>>;
