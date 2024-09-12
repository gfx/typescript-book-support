import { re } from "./re.mts";

const pattern = re`foo${123}bar`;
// コンパイルエラー:
// Argument of type 'number' is not assignable to parameter of type 'string | RegExp'.
