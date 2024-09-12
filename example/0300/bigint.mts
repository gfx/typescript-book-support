import { test } from "node:test";
import { strict as assert } from "node:assert";

// nサフィックスでBigIntリテラル
const bigintA = 100n;

// BigInt()関数で変換
const bigintB = BigInt(100); // 100n
const bigintC = BigInt("100"); // 100n

// MAX_SAFE_INTEGERはnumber型で確実に表現できる整数の最大値
// number型のままだと MAX_SAFE_INTEGER + 1 は MAX_SAFE_INTEGER と等しくなってしまいます
// しかしbigint型なら正確な計算結果になります
const bigintD = BigInt(Number.MAX_SAFE_INTEGER) + 1n; // 9007199254740992n

test("bigint", () => {
  assert.equal(bigintA, 100n);
  assert.equal(bigintB, 100n);
  assert.equal(bigintC, 100n);
  assert.equal(bigintD, 9007199254740992n);
});
