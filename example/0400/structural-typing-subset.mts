class C {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// TはCのサブセット（Cと比べるとageがない）
type T = {
  name: string;
};

// TはCのサブセットなので、C型の値はT型の変数に代入できます
const t: T = new C("instance of C", 42);
