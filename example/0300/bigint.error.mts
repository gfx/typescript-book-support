// 次の式はTypeScriptだとコンパイルエラー。numberとbigintは混ぜて演算できません
const bigintC = 10n + 20;
// error TS2365: Operator '+' cannot be applied to types '10n' and '20'

// 次の等価比較もコンパイルエラー
const result = 10n === 20;
// error TS2367: This comparison appears to be unintentional because the types 'bigint' and 'number' have no overlap.

// 算術演算をむりやりコンパイルを通しても、実行するとランタイムエラーになります
const bigintD = (10n as any) + (20 as any);
// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
