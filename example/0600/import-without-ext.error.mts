// error TS2835
import { add } from "./add"; // 設定次第でfoo.mjs, foo.js, foo/index.js などのいずれかのファイルをimportします
console.log(add(1, 2));
