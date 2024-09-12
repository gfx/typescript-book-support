// コンパイルエラーになる例
class C {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// TはCのサブセットだが、逆は真ではない（Cと比べるとageがない）
type T = {
  name: string;
};

const t = {
  name: "instance of T",
};

const c: C = t;
// [TS2741]: Property 'age' is missing in type 'T' but required in type 'C'.
// 訳: 'age'プロパティがT型に欠けていますが、C型には必須です
