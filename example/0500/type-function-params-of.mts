import type { Assert, Equals } from "./utility-types.mts";

export type ParamsOf<S extends string> =
  S extends `${infer _Head}{${infer Name}}${infer Tail}`
    ? { [K in Name]: string } & ParamsOf<Tail>
    : {};

// 例1
type Params1 = ParamsOf<"/{userId}/{entryId}/">;
type _T1 = Assert<Equals<Params1, { userId: string } & { entryId: string }>>;

// 例2
type Params2 = ParamsOf<"/@{account}/thread/{threadId}/comment/{commentId}">;
type _T2 = Assert<
  Equals<
    Params2,
    { account: string } & { threadId: string } & { commentId: string }
  >
>;
