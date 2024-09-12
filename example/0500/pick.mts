import type { Assert, Equals } from "./utility-types.mts";

// PickはTから一部のプロパティの集合を取り出す型関数
type _T1 = Assert<
  Equals<
    Pick<{ id: number; title: string; url: string }, "id" | "title">,
    { id: number; title: string }
  >
>;
