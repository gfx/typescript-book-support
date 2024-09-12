// とあるWebアプリケーションのリクエストを表す型
type GetRequest = {
  method: "GET";
  // GETは特別なパラメータを持ちません
};
type PostRequest = {
  method: "POST";
  content: Uint8Array; // POSTのときはバイト列（BLOB）をパラメータとして持つとします
};
type Request = GetRequest | PostRequest;
function f(req: Request) {
  switch (req.method) {
    case "GET":
      // ここでreqはGetRequest型になります
      console.log("This is GET");
      return;
    case "POST":
      // ここではreqはPostRequest型になります
      // PostRequest型なのでreq.contentを参照できます
      console.log(`This is POST (content: ${req.content})`);
      return;
    default:
      // この関数の呼び出し以前に論理破綻が起きていない限り、ここには到達しません
      const value: never = req; // ここでreqはnever型
      throw new Error(`Unsupported request: ${value}`);
  }
}

f({ method: "GET" }); // OK
f({ method: "POST", content: Uint8Array.from([0x01, 0x02]) }); // OK

// 無理やり論理破綻を発生させると、default節が実行されてランタイムエラーになります
f({ method: "PUT" } as any as Request); // Error: Unsupported method: PUT
