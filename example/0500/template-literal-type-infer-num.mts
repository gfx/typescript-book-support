import type { Assert, Equals } from "./utility-types.mts";

type ParseVersionString<T> = T extends `v${infer A extends
  number}.${infer B extends number}.${infer C extends number}`
  ? [A, B, C]
  : never;

type VersionParts = ParseVersionString<"v1.2.34">;

type _T1 = Assert<Equals<VersionParts, [1, 2, 34]>>;

// タプルなので要素も参照できます
type _T2 = Assert<Equals<VersionParts[0], 1>>;
type _T3 = Assert<Equals<VersionParts[1], 2>>;
type _T4 = Assert<Equals<VersionParts[2], 34>>;

// フォーマットにマッチしない文字列はneverになります
type _T5 = Assert<Equals<ParseVersionString<"foo">, never>>;
