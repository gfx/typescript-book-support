function die(message: string): never {
  throw new Error(message);
}

function foo() {
  die("I'm dying here!");

  // 次の文は「unreachable code」として判定され、エディタ上では色が薄くなります
  // また、`allowUnreachableCode: false`のもとではコンパイルエラーになります
  console.log("Hello, world!");
}
