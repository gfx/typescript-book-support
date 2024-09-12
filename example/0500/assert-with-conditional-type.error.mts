import type { Assert } from "./utility-types.mts";

type IsString<T> = T extends string ? true : false;

// 123はstringに代入可能ではないので、コンパイルエラーになります
type _T1 = Assert<IsString<123>>;
// error TS2344: Type 'false' does not satisfy the constraint 'true'.
