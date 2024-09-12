import type { Assert, Equals } from "./utility-types.mts";

// OmitはTから一部のプロパティの集合を除外する型関数
type _T2 = Assert<
  Equals<
    Omit<{ id: number; title: string; url: string }, "id" | "title">,
    { url: string }
  >
>;
