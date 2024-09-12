// このコードはDOM APIが必要なため、Node.js (tsimp) では実行できません！

// "button"のように単純な要素名だけを与えると対応した戻り値型を生成できます
const button1 = document.querySelector("button");
// button1: HTMLButtonElement | null

// クエリが複雑になると戻り値型はHTMLElementになります
const button2 = document.querySelector("button[type=submit]");
// button2: HTMLElement | null

// 型引数を与えると戻り値型を任意に設定できます
const button3 = document.querySelector<HTMLButtonElement>(
  "button[type=submit]",
);
// button3: HTMLButtonElement | null

// 暗黙の型アサーションで誤った型を指定すると、コンパイルエラーもランタイムエラーも起きません
const a1 = document.querySelector<HTMLAnchorElement>("button[type=submit]");
// a1: HTMLAnchorElement | null （これは誤り！）

// 明示的な型アサーションで書き直すと次のようになります
// 暗黙的な型アサーションと振る舞いは同じですが、「型アサーションなので危険」と認識しやすいです
const a2 = document.querySelector("button[type=submit]") as HTMLAnchorElement;
// a: HTMLAnchorElement | null （これは誤り！）
