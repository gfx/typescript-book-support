import type { Assert, Equals } from "./utility-types.mts";

type _T1 = Assert<Equals<Record<string, number>, { [key: string]: number }>>;
