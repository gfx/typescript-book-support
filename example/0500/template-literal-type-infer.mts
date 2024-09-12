import type { Assert, Equals } from "./utility-types.mts";

type ParseVersionString<T extends string> =
  T extends `v${infer A}.${infer B}.${infer C}` ? [A, B, C] : never;

type VersionParts = ParseVersionString<"v1.2.34">;

type _T1 = Assert<Equals<VersionParts, ["1", "2", "34"]>>;
