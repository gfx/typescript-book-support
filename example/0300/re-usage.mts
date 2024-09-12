import { strict as assert } from "node:assert";
import { test } from "node:test";
import { re } from "./re.mts";

// 「符号付き10進数の整数」を表す正規表現を部品から組み立てます
const digit = re`[0-9]`;
const digitNonZero = re`[1-9]`;
const sign = re`[+-]`;
const decimal = re`${sign}?${digitNonZero}${digit}*|${sign}?${digit}`;
const decimalOnly = re`^${decimal}$`;

test("decimal", () => {
  test("valid", () => {
    // これらのtest()はすべてtrueになります
    assert.ok(decimalOnly.test("123"));
    assert.ok(decimalOnly.test("+789"));
    assert.ok(decimalOnly.test("-0"));
  });
  test("invalid", () => {
    // これらのtest()はすべてfalseになります
    assert.ok(!decimalOnly.test("foo"));
    assert.ok(!decimalOnly.test("3.14"));
    assert.ok(!decimalOnly.test("001"));
  });
});
