import type { Assert, Equals } from "./utility-types.mts";

type Entry = {
  id: number;
  title: string;
};

// プロパティidとtitleに対してそれぞれEntry["id"]とEntry["title"]の型をマッピングします
type _T1 = Assert<
  Equals<
    { [P in "id" | "title"]: Entry[P] },
    { ["id"]: Entry["id"]; ["title"]: Entry["title"] }
  >
>;
