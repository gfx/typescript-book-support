// HTTPリクエスト
class HttpRequest {
  // プロパティ
  readonly method: string;
  readonly url: string;

  // コンストラクタ
  constructor(method: string, url: string) {
    this.method = method;
    this.url = url;
  }

  // 静的メソッド
  static createGet(url: string) {
    return new HttpRequest("GET", url);
  }

  // インスタンスメソッド
  perform() {
    console.log(`Performing ${this.method} ${this.url} ...`);
    // 実装は省略
  }
}

// 静的メソッドを呼びます
const req = HttpRequest.createGet("https://example.com/");

// インスタンスメソッドを呼びます
req.perform(); // "Performing GET https://example.com/ ..."
