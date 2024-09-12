import type { Assert } from "./utility-types.mts";

// Tがstring型に代入可能であればtrue型、そうでなければfalse型を返す型関数
type IsString<T> = T extends string ? true : false;

// "foo"はstringに代入可能なのでOK
type _T1 = Assert<IsString<"foo">>;
