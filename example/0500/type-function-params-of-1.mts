import type { Assert, Equals } from "./utility-types.mts";
import type { ParamsOf } from "./type-function-params-of.mts";

// `type Params = ParamsOf<"/{userId}/{entryId}/">`を考えます

// 1. `S = "/{userId}/{entryId}/"`
type Step1 =
  "/{userId}/{entryId}/" extends `${infer _Head}{${infer Name}}${infer Tail}`
    ? [_Head, Name, Tail]
    : never;
type _T1 = Assert<Equals<Step1, ["/", "userId", "/{entryId}/"]>>;

// 2. ここで、ParamsOfの条件付き型のtrue側に入るので、`Name = "userId"`として交差演算子の左辺だけ考えます
type Step2 = { [K in "userId"]: string };
type _T2 = Assert<Equals<Step2, { userId: string }>>;

// 3. `Tail = "/{entryId}/"`として再帰的にParamsOfを呼び出します
type Step3 = ParamsOf<"/{entryId}/">;
type _T3 = Assert<Equals<Step3, { entryId: string }>>;

// 4. Step 2とStep 3を交差演算子で結合します
type Step4 = { userId: string } & { entryId: string };
type _T4 = Assert<Equals<Step4, { userId: string } & { entryId: string }>>;
