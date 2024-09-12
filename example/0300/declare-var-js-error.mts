// 存在しない変数の場合は、コンパイルは通るがNode.jsによるランタイムエラーになります
declare var foobar: any;
console.log({ foobar });
// ReferenceError: foobar is not defined
