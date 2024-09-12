import type { Assert, Equals } from "./utility-types.mts";

type _T1 = Assert<Equals<ReturnType<() => number>, number>>;
