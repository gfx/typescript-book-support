import type { Assert, Equals } from "./utility-types.mts";

type Entry = {
  id: number;
  title: string;
};

// Entryのidプロパティはnumber型
type _T2 = Assert<Equals<Entry["id"], number>>;

// Entryのtitleプロパティはstring型
type _T1 = Assert<Equals<Entry["title"], string>>;
