import type { Assert, Equals } from "./utility-types.mts";

type _T01 = Assert<Equals<string, string>>;
type _T02 = Assert<Equals<true | false, boolean>>;
type _T03 = Assert<Equals<0, 0>>;
type _T04 = Assert<Equals<1, 1>>;
type _T05 = Assert<Equals<{ id: number }, { id: number }>>;
type _T06 = Assert<Equals<() => void, () => void>>;
type _T07 = Assert<Equals<any, any>>;
type _T08 = Assert<Equals<unknown, unknown>>;
type _T09 = Assert<Equals<never, never>>;
type _T10 = Assert<Equals<void, void>>;
