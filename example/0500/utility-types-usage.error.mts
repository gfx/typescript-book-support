import type { Assert, Equals } from "./utility-types.mts";

type _T00 = Assert<Equals<string, number>>;
type _T01 = Assert<Equals<string, "foo">>;
type _T02 = Assert<Equals<1, 1 | 2>>;
type _T03 = Assert<Equals<{ id: number }, { id?: number }>>;
type _T04 = Assert<Equals<{ id: number }, { readonly id: number }>>;
type _T05 = Assert<Equals<string, any>>;
type _T06 = Assert<Equals<string, never>>;
type _T07 = Assert<Equals<string, unknown>>;
type _T08 = Assert<Equals<any, unknown>>;
type _T09 = Assert<Equals<any, never>>;
type _T10 = Assert<Equals<unknown, never>>;
