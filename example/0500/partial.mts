import type { Assert, Equals } from "./utility-types.mts";

type Entry = {
  id: number;
  title: string;
};

type PartialEntry = Partial<Entry>;

// ここでPartialEntryは `{ id?: number, title?: string }` と等しいです
type _T1 = Assert<Equals<PartialEntry, { id?: number; title?: string }>>;
