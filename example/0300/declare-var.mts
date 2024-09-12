// tsimpで実行する場合、グローバル変数processがあるべきです
// （ただし、通常は`@types/node`モジュールを使うのでこのような宣言は不要）
declare var process: any;
console.log({ "process.env.HOME": process.env.HOME });
// 環境変数HOMEの値が出力されます
