// 正規表現を生成するタグ付きテンプレート関数
// ただし、RegExpコンストラクタにフラグは渡せません
export function re(
  strs: TemplateStringsArray,
  ...exprs: ReadonlyArray<string | RegExp>
): RegExp {
  let source = "";
  // `TemplateStringsArray`は、`ReadonlyArray<string>`とほぼ同じだが、
  // さらに`raw: ReadonlyArray<string>`というプロパティを持つ配列オブジェクト。
  // `raw`プロパティはエスケープシーケンスが解釈されていない生の文字列の配列です
  for (let i = 0; i < strs.raw.length; i++) {
    source += strs.raw[i];
    if (i < exprs.length) {
      const item = exprs[i];
      if (item instanceof RegExp) {
        source += `(?:${item.source})`;
      } else {
        source += String(item);
      }
    }
  }
  return new RegExp(source);
}
