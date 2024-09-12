type VersionString = `v${number}.${number}.${number}`;

// 次の文はコンパイルエラーになります
const c = "foo" satisfies VersionString;
// [TS1360] (4,27): Type '"foo"' does not satisfy the expected type '`v${number}.${number}.${number}`'.
