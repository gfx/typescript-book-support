function assertString<T>(x: unknown): asserts x is string {
  if (typeof x !== "string") {
    throw new Error("not a string!");
  }
}

// DBから取得したという想定のレコードから"foo"フィールドを取得します。このとき"foo"はstringです
function fetchFooFromRecord(record: Record<string, any>): string {
  const foo = record["foo"];
  assertString(foo);
  return foo;
}

const foo = fetchFooFromRecord({ foo: "value" });
console.log(foo); // "value"
