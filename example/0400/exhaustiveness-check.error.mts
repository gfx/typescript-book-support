type GetRequest = {
  method: "GET";
};
type PostRequest = {
  method: "POST";
  content: Uint8Array;
};
// DeleteRequestを足しました
type DeleteRequest = {
  method: "DELETE";
};
type Request = GetRequest | PostRequest | DeleteRequest;

// 関数f()の実装は前述と同じです。DeleteRequestを処理するコードがないのでコンパイルエラーになります
function f(req: Request) {
  switch (req.method) {
    case "GET":
      console.log("This is GET");
      return;
    case "POST":
      console.log(`This is POST (content: ${req.content})`);
      return;
    default:
      const value: never = req; // ここでreqはDeleteRequest型なのでコンパイルエラー
      // [TS2322]: Type 'DeleteRequest' is not assignable to type 'never'.
      throw new Error(`Unsupported request: ${value}`);
  }
}
