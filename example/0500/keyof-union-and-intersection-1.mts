import type { Assert, Equals } from "./utility-types.mts";

type T1 = { a: string; b: string };
type T2 = { b: string; c: string };

type KI = keyof T1 & keyof T2;
// KIは`"b"`になります
type _T1 = Assert<Equals<KI, "b">>;

type KU = keyof (T1 | T2);
// KUも`"b"`になります！
type _T2 = Assert<Equals<KU, "b">>;
