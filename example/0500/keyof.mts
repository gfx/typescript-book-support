import type { Assert, Equals } from "./utility-types.mts";

type Entry = {
  id: number;
  title: string;
};

type _T1 = Assert<Equals<keyof Entry, "id" | "title">>;
